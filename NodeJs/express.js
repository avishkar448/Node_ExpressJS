const mongoose=require('mongoose')
const express=require('express')
const app=express()
const env=require('dotenv')

const Router=require('./route')
//const postRoute=require('./post')

env.config();
app.use(express.json())
app.use('/user',Router)
//app.use('/authorisedUser',postRoute)

mongoose.set('strictQuery',true)
mongoose.connect(process.env.DB_Connection)

.then(()=>{ 
    console.log('Connected to database')
})
.catch((error)=>{ 
    console.log(error)
})

// mongoose.connection.createCollection('RCB',(err)=>{ 
//     if(err) throw err
//     console.log("collection created!!")
// })

app.listen(4000)