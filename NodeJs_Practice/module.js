const mongoose=require('mongoose')

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
    date:{ 
        type:Date,
        default:Date.now()
    }
})

mongoose.pluralize(null)
module.exports=mongoose.model("CSK",userSchema)

