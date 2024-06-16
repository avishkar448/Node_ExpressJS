const express=require('express')
const app=express()
const mongoose=require('mongoose')

const router=require('./route')
const  env=require('dotenv')
const postRoute=require('./post')
env.config();

app.use(express.json())
app.use("/authorisedUser",postRoute)
app.use("/user",router);


mongoose.set('strictQuery',true)
mongoose.connect(process.env.DB_connnection)

.then(()=>{ 
    console.log('Connection created!!')
})
.catch((error)=>{ 
    console.log(`There will be a error ${error}`)
})

app.listen(4000)
// mongoose.connection.createCollection('test',(error)=>{ 
//     if(error) throw error
//     console.log('Collection created succesfully!!')
// })

