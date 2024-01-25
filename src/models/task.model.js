import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    Temperatura:{
        type:Number,
        required: true,
    },
    Humedad:{
        type:Number,
        required: true,
    },
 /*   user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }*/
})

export default mongoose.model("Task",taskSchema);