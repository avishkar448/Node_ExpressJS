// const mongoose = require("mongoose");
// const url =
//   "mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/Rock?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.set("strictQuery", false);

// mongoose.connect(url,{ 
//      useNewUrlParser:true,
//      useUnifiedTopology:true,
//  });

// const db=mongoose.connection;
// db.on('error',console.error.bind(console,'mongoDB connection error'))

// db.once('open',()=>{ 
//     console.log("connected to mongoDB")
// })

// db.createCollection('mern',(err,result)=>{ 
//     if(err){ 
//         console.log('error occure while creating collection ',err)
//     }
//     else{ 
//         console.log('Database created successfully')
//     }
//     mongoose.connection.close;
// })

const express=require('express')
const app=express()
const mongoose=require('mongoose')

app.use(express.json())
mongoose.set('strictQuery',true)

mongoose.connect('mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/Rock?retryWrites=true&w=majority&appName=Cluster0')

.then(()=>{ 
    console.log('connected succesfully')
})
.catch((err)=>{ 
    console.log('There will be some error: ',err)
})

mongoose.connection.createCollection('Lucy',(err)=>{ 
    if(err){ 
        console.log("Error occure: ",err)
    }
    else{ 
        console.log('Database created successfully')
    }
})
app.listen(4000)
