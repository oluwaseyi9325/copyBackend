const { userDetailsModel } = require("../../model/user/userDetailsModel");

const portfolioLinkController=(req,res)=>{
    const {linkedin,facebook,twitter,website,email}=req.body;
    // console.log(req.body)
    userDetailsModel.findOneAndUpdate({email:email},{
        linkedin:linkedin,
        facebook:facebook,
        twitter:twitter,
        website:website
    },(err,result)=>{
        if (err) {
            res.send({message:"Internal server Error",status:false})
        }else{
            res.send({message:"Portfolio Link Updated.",status:true})
        }
    })
}

module.exports={portfolioLinkController};