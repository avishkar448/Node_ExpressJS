const mongoose=require('mongoose')
const express=require('express')
const app=express()
const router=require('./n3')

const env=require('dotenv')
const postRoute=require('./post')
env.config();

app.use(express.json())
app.use("/authorisedUser",postRoute)
app.use('/xx',router)

mongoose.set('strictQuery',true)
mongoose.connect(process.env.DB_connnection)

.then(()=>{ 
    console.log("connected succesfully")
})
.catch((error)=>{ 
    console.log(error)
})

// mongoose.connection.createCollection('abc',(err)=>{ 
//     if(err) throw err;
//     console.log("connection created")
// })

app.listen(4000)