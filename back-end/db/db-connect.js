 
const mongoose=require('mongoose');
const URI ="mongodb://127.0.0.1:27017/mysaurav";
    
const connectDb= async() => {
    try{
        await mongoose.connect(URI);
        console.log("Connected to Mongodb");

    }
    catch(error){

        console.error("Connection failed");
        console.log(error);
        process.exit(0);
    }


};


module.exports = connectDb;