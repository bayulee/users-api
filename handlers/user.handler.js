const { object } = require("yup");

const userhandler ={}

userhandler.handerErrors=(error)=>{
    let errorData ={username:"", password:""};

    if(error.code ===11000){
        errorData.username="the data is not available";
        return errorData;
    }
    if(error.message.includes("user validation failed")){

        object.values(error.errors).forEach(({properties})=>{

            errorData[properties.path] = properties.message;
        })
    }
}
module.exports=userhandler