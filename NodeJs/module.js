const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema({ 
    name:{ 
        type:String,
        require:true
    },
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
module.exports=mongoose.model('RCB',UserSchema)