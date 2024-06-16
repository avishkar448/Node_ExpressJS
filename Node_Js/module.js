const mongoose=require('mongoose')

//re
const userSchema=new mongoose.Schema({ 
    name:{
        type:String,
        required:true
     },
     email:{ 
        type:String,
        required:true
     },
     mobile:{ 
        type:Number,
        required:true
     },
     password:{ 
      type:String,
      required:true
     },
     Date:{ 
        type:Date,
        default:Date.now()
     }
})

mongoose.pluralize(null)
module.exports=mongoose.model('CSK',userSchema)

//