const { userDetailsModel } = require("../../model/user/userDetailsModel");
const jwt=require("jsonwebtoken")

const userLoginController=(req,res)=>{
    const {email,password}=req.body
    console.log(req.body);

    userDetailsModel.findOne({email:email},(err,result)=>{
        if (err) {
            res.send({message:"Internal server error",status:false})
        }else{
            if (!result) {
                res.send({message:"Invalid email",status:false})
            }else{
                result.validatePassword(password,(err,same)=>{
                    if (!same) {
                res.send({message:"Invalid password",status:false})  
                    }else{
                        let secret=process.env.userAuthSecret;
                        const myToken=jwt.sign({email},secret,{expiresIn:"120s"})
                        // console.log(myToken)
                        res.send({message:"login successful",status:true,myToken})
                    }
                })
            }
        }
    })

}

module.exports={userLoginController}