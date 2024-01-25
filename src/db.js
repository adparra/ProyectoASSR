import mongoose from 'mongoose';

const connect = async() =>{
    mongoose.connect('mongodb+srv://admin:admin@cluster0.msrodyc.mongodb.net/')
        .then( () =>{
            console.log("conectado a la base de datos!")
        })
        .catch((err)=>{
            console.log("Error conectando a la base de datos")
        });}

export default connect;