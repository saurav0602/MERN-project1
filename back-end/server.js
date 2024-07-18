const express= require('express');
const app=express();
const port =8000;
const connectDb=require('./db/db-connect');
const User=require('./db/user');
const cors=require('cors');




app.use(express.json());
 
app.use(cors())


 app.post('/register',async(req,res)=>{
    try{
        const {username,password} =req.body;
        console.log(req.body);
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'Registration succcesfully'});

    }
    catch(error){
        res.status(500).json({error:'Registration failed'});

    }
 });
 //Login
 app.post('/login',async(req,res)=>{
    try{
        const {username,password} =req.body;
        const user =await User.findOne({username});
         
       if (!user){
        return res.status(401).json({error :'Invalid username pr password'});

       }
       if(user.password !== password){
        return res.status(401).json({error:'Invalid username or password'});
       }
       res.status(200).json({message:'Login sucessful'});

    }
    catch(error){
        res.status(500).json({error:'Login failed'});
       
    }
 });



connectDb().then(()=> {
app.listen(port, () =>{
    console.log(`Server is listening: ${port}`)

});
});
