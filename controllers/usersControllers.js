const User = require("../models/userSchema")
const bcrypt=require("bcrypt")
const validate =require("../config/validator")
const userhandler=require("../handlers/user.handler")

const getUsers= async(req, res)=>{
    try{
        let allUsers=await User.find({});
        res .status(200).json({sucess:true, body:allUsers});
}catch(error){
    res.status(500).json({success:false,body:error});
}
}
//create a single user
const createUser =async(req, res)=>{
    try{ 
 //hashing password with bcrypt
 const salt =await  bcrypt.genSalt(10)
 const hashPassword=await bcrypt.hash(req.body.password,salt) ;

 //validating a user
 const valid=await validate({username,email,password})
 if(valid){
    const newUser= new User({
        username:req.body.username,
        email:req.body.email,
        password:hashPassword
   
    });
    await newUser.save();
    res.status(201).json({
        _id:newUser._id,
        username:newUser.username,
        email:newUser.email
    })
}else{
    res.status(400).json({
        message:"Invalid data"
    });
}}catch(error){
    let message= userhandler.handerErrors(error)
}
}
//get user by id
const getUser = async(req, res)=>{
    try{
        const userId=req.params.id;
const user=await User.findById(userId)

res.status(200).json({success:true,body:user});
    } 
    catch(error){
        res.status(400).json({success:false, body:error});

    }



}





module.exports ={getUsers, createUser ,getUser}