const express=require("express")
const userRoute = require("./routes/usersRoutes")
const logger=require("./middlewares/user.logger")
const booksRoute = require("./routes/booksRoute")
require("dotenv").config()
const connectDB=require("./config/connectDB")
const path= require('path')

connectDB()
const app=express()
//MIDDLEWARES
app.use(express.json());
app.use(logger)
app.use(userRoute)
app.use(booksRoute)

//home route
app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname + '/pages/index.html'))
})

app.get("/*",(req,res)=>{
    res.status(400).sendFile(path.join(__dirname + "/pages/404.html"))
})
const PORT = 4010;
app.listen(PORT, ()=>{
console.log("SERVER IS UP!")
})