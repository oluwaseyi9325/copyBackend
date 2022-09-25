
const { userDetailsModel } = require("../../model/user/userDetailsModel");

const addSummaryController=(req,res)=>{
    const {summary,experience,language}=req.body;
    userDetailsModel.findOneAndUpdate({email:email},{
       summary:summary,
      experience:experience,
      language:language
    },(err,result)=>{
        if (err) {
            res.send({message:"Internal server Error",status:false})
        }else{
            res.send({message:"profile updated",status:true})
        }
    })
}

module.exports={addSummaryController};