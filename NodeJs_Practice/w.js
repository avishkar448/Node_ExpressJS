const express=require('express')
const app=express()
const mongoose=require('mongoose')

const router=require('./y')
app.use(express.json())
app.use("/user",router);


mongoose.set('strictQuery',true)
mongoose.connect('mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/IPL?retryWrites=true&w=majority&appName=Cluster0')

.then(()=>{ 
    console.log('connection created')
})
.catch((error)=>{ 
    console.log("error occure: ",error)
})

// mongoose.connection.createCollection('KKR',(error)=>{ 
//     if(error) throw error
//     console.log("Collection is created!!")
// })

app.listen(4000)
