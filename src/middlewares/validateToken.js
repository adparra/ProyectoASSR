import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';
import User from '../models/user.model.js';

export const authRequired = (req,res,next) =>{
    const {token} = req.cookies;
    if(!token) return res.status(401).json({message:
        "No hay token, unauthorized"});
    
    jwt.verify(token,TOKEN_SECRET,(err,user) =>{
        if (err) return res.status(403).json({message: "token invalido"});
        req.user= user;
        next();
    })
}

/*export const isAdmin = (req,res,next) =>{
    const {token}= req.cookies;
    jwt.verify(token, TOKEN_SECRET, async (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        const userFound= await User.findById(decoded.id);
        console.log(userFound.isAdmin);
        if (userFound.isAdmin){
            next();
        }
        else{
            return res.status(403).json({message:"Not authorized"});
        }
    })
    
}*/