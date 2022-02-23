const mongoose = require("mongoose");
const config = require('../config/config');
// const connectionString = "mongodb+srv://test:1234@cluster0.ekn6u.mongodb.net/inmobiliaria?retryWrites=true&w=majority";


const connectDB = async () =>{
    try{
        await mongoose.connect(config.Urldb).then(()=>{
            console.log("Conectado!");
        });
    }catch(err){
        console.log("Error! "+err);
    }
}

connectDB();

module.exports = {
    connectDB
}