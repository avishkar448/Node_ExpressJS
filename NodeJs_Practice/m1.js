const express=require('express')
const app=express()
const mongoose=require('mongoose')

const router=require('./m3')
app.use(express.json())

app.use('/user',router)

mongoose.set('strictQuery',true)
mongoose.connect('mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/Office?retryWrites=true&w=majority&appName=Cluster0')

.then(()=>{
    console.log('connection created!!')
})
.catch((error)=>{ 
    console.log(error)
})

// mongoose.connection.createCollection('emp',(error)=>{ 
//     if(error) return error
//     console.log("collection created!!")
// })

app.listen(4000)


