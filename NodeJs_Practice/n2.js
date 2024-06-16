const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({ 
    email:{ 
        type:String,
        require:true
    },
    mobile:{ 
        type:Number,
        require:true
    },
    password:{ 
        type:String,
        require:true
    }
})

mongoose.pluralize(null)
module.exports=mongoose.model('abc',userSchema)