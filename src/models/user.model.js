import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        trim: true 
    },
    email: {
        type:String,
        required: true,
        trim: true,
        unique: true
    }, 
    password: {
        type:String,
        required: true
    },
    /*isAdmin: {
        type: Boolean,
        default: false
    },*/
    /*isOperator: {
        type: Boolean,
        default: false
    }*/
});

export default mongoose.model('User',userSchema);