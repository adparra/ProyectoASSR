import Task from '../models/task.model.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'
import User from '../models/user.model.js'


export const getAllTasks = async (req,res) => {
    const tasks= await Task.find();
    res.json(tasks);
};


/*export const getTasks = async (req,res) => {
    const {token}= req.cookies;
    jwt.verify(token, TOKEN_SECRET, async (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        const userFound= await User.findById(decoded.id);
        console.log(userFound._id);
        const tasks= await Task.find({"user":{_id:userFound._id}});
        res.json(tasks);
        return   
    })
    
    //const userId= data.id;
    //const tasks= await Task.find({"user":{_id:userId}});
    //res.json(tasks);
};*/

export const postTask = async (req,res) => {
    const{
        temperatura,
        humedad
    } = req.body
    const newTask= new Task({
        temperatura,
        humedad
    })

    const savedTask= await newTask.save();
    res.json(savedTask);
};

export const getTask = async (req,res) => {
    try {
        const task= await Task.findById(req.params.id);
        if (!task) return res.status(404).json({message: "Task not found"});
        res.json(task);
    } catch (error) {
        return res.status(404).json({message: "Task not found"})
    }
};

export const putTask = async (req,res) => {
    const task= await Task.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    });
    if (!task) return res.status(404).json({message: "Task not found"});
};

export const deleteTask = async (req,res) => {
    const task= await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({message:"Task not found"});
    res.sendStatus(204);
};