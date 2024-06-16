const mongoose=require('mongoose')

const uSchema=new mongoose.Schema({ 
    name:{
        type:String ,
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
    password:{ 
        type:String,
        require:true
    }
})

mongoose.pluralize(null)
module.exports=mongoose.model("KKR",uSchema)