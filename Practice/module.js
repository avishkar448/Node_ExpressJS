import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ 
    name :{ 
        type:String,
        required:true
    },
    email:{ 
        type:String,
        required:true
    },
    phone:{ 
        type:String,
        required:true
    },
    password:{ 
        type:String,
        required:true
    }
})

mongoose.pluralize(null)
const userModule=mongoose.model('Avishkar',UserSchema)
export default userModule