import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const register = async (req,res) => {
    const {email,password,username} = req.body; 
    
    try {

        const userFound= await User.findOne({email: String(email)});
        if (userFound) return res.status(400).json(["Email ya en uso"]);

        const passwordHash = await bcrypt.hash(password,10); //encripta la contraseña
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
        const savedUser= await newUser.save();
        const token = await createAccessToken({id: savedUser._id});

        res.cookie('token',token);
        res.json({
            id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

export const login = async (req,res) => {
    const {email,password} = req.body; 
    
    try {

        const foundUser = await User.findOne({email});

        if(!foundUser) return res.status(400).json([
            "Usuario no existe"]);

        const isValidPw = await bcrypt.compare(password,foundUser.password); //compara contraseña ingresada con contraseña en base
        
        if(!isValidPw) return res.status(400).json([
            "Contraseña incorrecta"])
    
        const token = await createAccessToken({id: foundUser._id});
        res.cookie('token',token);
        res.json({
            id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email,
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

export const logout = (req,res) =>{
    res.cookie('token',"",{expires: new Date(0)});
    return res.sendStatus(200);
}

export const profile = async (req,res) => {
    const foundUser= await User.findById(req.user.id);
    if(!foundUser) return res.status(404).json({message:"Usuarion no encontrado"})

    return res.json({
        id: foundUser._id,
        username: foundUser.username,
        email: foundUser.email,
    });
    
}

export const verifyToken= async (req,res) =>{
    const {token}= req.cookies;
    if (!token) return res.status(401).json({message:"No autorizado"})

    jwt.verify(token, TOKEN_SECRET, async (err,user) => {
        if (err) return res.status(401).json({message:"No autorizado"});

        const userFound= await User.findById(user.id)
        if (!userFound) return res.status(401).json({message:"Usuario no existe"});

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })
    });
}