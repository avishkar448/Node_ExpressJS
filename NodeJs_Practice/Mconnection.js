const mongoose=require('mongoose')
const url='mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/xyz?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery',false)

// mongoose.connect(url,{ 
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })
mongoose.connect(url)
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Mongodb connection error"))

db.once('open',()=>{ 
    console.log("Connected to mongoDB")
})

db.createCollection('gandhi',(err,result)=>{ 
    if(err){ 
        console.log("error occure while creating collection ",err)
    }
    else{ 
        console.log("Database created successfully")
    }
    mongoose.connection.close;
})

// const express=require('express')
// const app=express()
// const mongoose=require('mongoose')

// mongoose.set('strictQuery',false)

// mongoose.connect('mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/Mydatabase?retryWrites=true&w=majority&appName=Cluster0')

// .then(()=>{ 
//     console.log('Connected succesfully')
// })
// .catch((err)=>{ 
//     console.log('Fail to connected ',err)
// })

// mongoose.connection.createCollection('Saverker',(err)=>{ 
//     if(err) throw err
//     console.log('collection is created')
// })