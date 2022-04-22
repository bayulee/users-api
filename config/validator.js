const yup =require("yup")

function validate(data){
    const userSchema=yup.object().shape({
        username:yup.string().required ("fill me, my friend!!").min(2).max(30),
        email:yup.string().email.required ("fill").min(20).max(30),
        password:yup.string().required ("fill").min(8).max(100)

    })
    return userSchema.validate(data)
}
module.exports=validate;