const express=require('express')
const app=express()
const mongoose=require('mongoose')

const xyz=require('./c')

app.use(express.json())
app.use('/user',xyz)

mongoose.set('strictQuery',true)

mongoose.connect('mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/Students?retryWrites=true&w=majority&appName=Cluster0')

.then(()=>{ 
    console.log("Connection created!! ")
})
.catch((err)=>{ 
    console.log(err)
})

// mongoose.connection.createCollection("class10",(err)=>{
//     if(err){ 
//         console.log(err)
//     }
//     console.log("Collection created! ")
// })

app.listen(4000)