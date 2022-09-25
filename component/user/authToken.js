const jwt = require('jsonwebtoken');


const jwtController=(req,res)=>{
        console.log(req.headers.authorization.split(" ")[1])
        let getToken=req.headers.authorization.split(" ")[1];
        let secret="secret"
        jwt.verify(getToken,secret,(err,result)=>{
            if (err) {
                res.send({status:false})
            }else{
                let email=result.email
                console.log(email)
                res.send({message:"user get dashboard",status:true,email})
            }
        })

}

module.exports={jwtController}