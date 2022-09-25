const { userDetailsModel } = require("../../model/user/userDetailsModel");

const editNamesController=(req,res)=>{
    const {full_name,job,company_school,location}=req.body;
    userDetailsModel.findOneAndUpdate({email:email},{
        full_name:full_name,
        job:job,
        company_school:company_school,
        location:location
    },(err,result)=>{
        if (err) {
            res.send({message:"Internal server Error",status:false})
        }else{
            res.send({message:"profile updated",status:true})
        }
    })
}

module.exports={editNamesController};