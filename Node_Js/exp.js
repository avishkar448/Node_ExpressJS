
const express=require('express')
const app=express();
const mongoose=require('mongoose')

const router=require('./route')

const env=require('dotenv')
const postRoute=require('./post')
env.config();

app.use(express.json())
app.use('/authorisedUser',postRoute)

app.use('/user',router);

mongoose.set('strictQuery',true)

mongoose.connect(process.env.DB_connection)

.then(()=>{ 
    console.log('Connection created')
})
.catch((err)=>{ 
    console.log(`There will be some error ${err}`)
})

app.listen(4000)
//
