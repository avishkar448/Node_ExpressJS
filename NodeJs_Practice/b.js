const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({ 
    name:{ 
        type:String,
        require:true
    },
    address:{ 
        type:String,
        require:true
    },
    phone:{ 
        type:Number,
        require:true
    },
    fees:{ 
        type:Number,
        require:true
    } ,
    email:{ 
        type:String,
        require:true
    },
    password:{ 
        type:String,
        require:true
    }
})

mongoose.pluralize(null)
module.exports=mongoose.model("class10",userSchema)