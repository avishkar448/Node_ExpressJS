const express=require('express')
const app=express()
const mongoose=require('mongoose')

const route=require('./def')

app.use(express.json())
app.use("/user",route)

mongoose.set('strictQuery',true)

mongoose.connect('mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/Company?retryWrites=true&w=majority&appName=Cluster0')

.then(()=>{ 
    console.log('connection is created')
})
.catch((error)=>{ 
    console.log("Connection error occure ",error)
})

// mongoose.connection.createCollection('employee',(err)=>{ 
//     if(err){ 
//         console.log("Error occure ",err)
//     }
//     console.log("Collection is created!!")
// })

app.listen(4000)