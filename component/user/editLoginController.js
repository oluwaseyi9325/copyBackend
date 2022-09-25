const { userDetailsModel } = require("../../model/user/userDetailsModel");

const editLoginController=(req,res)=>{
    const {email,password}=req.body;
    userDetailsModel.findOneAndUpdate({email:email},{
        email:email,
        password:password
    },(err,result)=>{
        if (err) {
            res.send({message:"Internal server Error",status:false})
        }else{
            res.send({message:"profile updated",status:true})
        }
    })
}

module.exports={editLoginController};