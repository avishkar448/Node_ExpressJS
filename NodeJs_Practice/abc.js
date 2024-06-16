const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({ 
    name:{ 
        type:String,
        require:true
    },
    email:{ 
        type:String,
        require:true
    },
    phone:{ 
        type:Number,
        require:true
    },
    salary:{ 
        type:Number,
        require:true
    },
    date:{ 
        type:Date,
        default:Date.now()
    }
})

mongoose.pluralize(null)
module.exports=mongoose.model("employee",userSchema)