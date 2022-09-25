const { userDetailsModel } = require("../../model/user/userDetailsModel")


const signupController=(req,res)=>{
    // console.log(req.body)
   let {email}=req.body;
    const regUser=new userDetailsModel(req.body);
    userDetailsModel.findOne({email:email},(err,result)=>{
        if (err) {
            res.send({message:"Internal server error",status:false})
        }else{
            if (result) {
                res.send({message:"Email already exist",status:false})  
            }else{
            regUser.save((err,result)=>{
                if (err) {
                    console.log(err)
                    res.send({message:"Internal server error",status:false})
                }else{
                    res.send({message:"Registration successful",status:true})
                    console.log(result)
                }
            })
            }
        }
    })
   

    
}

module.exports={signupController};