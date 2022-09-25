const mongoose=require("mongoose");
const bcypt=require("bcryptjs")


const userDetailsSchema=mongoose.Schema({
      email:{type:String,required:true,unique:true,trim:true},
      password:{type:String,required:true,trim:true},
      full_name:{type:String},
      job:{type:String},
      location:{type:String},
      company_school:{type:String},
      summary:{type:String},
      experience:{type:Number},
      language:{type:String},
      linkedin:{type:String},
      facebook:{type:String},
      twitter:{type:String},
      website:{type:String}
});


let sailRound=10
userDetailsSchema.pre("save",function (next) {
    bcypt.hash(this.password,sailRound,(err,hashedPaaword)=>{
        if (err) {
            console.log("error")
        }else{
            // console.log(hashedPaaword)
            this.password=hashedPaaword;
            next()
        }
    })
})

userDetailsSchema.methods.validatePassword=function(password,callback) {
    console.log(this.password)

    bcypt.compare(password,this.password,(err,same)=>{
        if (!err) {
            callback(err,same)
        }else{
            next()
        }
    })
}






let userDetailsModel=mongoose.model("user_details_model",userDetailsSchema);


module.exports={userDetailsModel};

