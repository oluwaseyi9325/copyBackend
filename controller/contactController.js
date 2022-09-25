var nodemailer = require('nodemailer');
const contactController=(req,res)=>{
    const {full_name,email,phone_no,title,message}=req.body;
    const contactTemplate=`

<div>
<div>
  <h2 style="color:#2036ea ;">Message Title:- </h2>
   <p>
    ${title}?
   </p>
</div>
<h2 style="color:#2036ea ;">Sender Info:-</h2>
<ul>
 <li>Name : ${full_name}</li>
 <li>Phone Number : ${phone_no}</li>
 <li>Email: ${email}</li>
</ul>

<div>
  <h2 style="color:#2036ea ;">Message :-</h2>
  <p>
   ${message}
  </p>
</div>


<p style="color:#2036ea ;"><i>The CopyUp Team.</i></p>
</div>


`;

  let mail=process.env.gmail;
  let pws=process.env.password;
  // console.log(mail,pws)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: mail,
          pass: pws
        }
      });

      var mailOptions = {
        from: '',
        to: `${process.env.gmail}`,
        subject: 'CopyUp —— Support Message',
        text: 'CopyUp',
        html: contactTemplate,
      
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
          res.send({message:"Internal Server Error!!!",status:false})
        } else {
            res.send({message:"CopyUp Team will get back to you !!!",status:true})
          
        }
      });
    


}

module.exports={contactController};