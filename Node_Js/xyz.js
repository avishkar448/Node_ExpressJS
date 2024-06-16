// const mongoose=require('mongoose')
// const mongoURL='mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/avi?retryWrites=true&w=majority&appName=Cluster0'

// mongoose.set('strictQuery',false)

// mongoose.connect(mongoURL,{ 
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// });
// const db=mongoose.connection;
// db.on('error',console.error.bind(console,'mongoDB connection error'))

// db.once('open',()=>{ 
//     console.log("connect to mongoDB!!")
// })

// db.createCollection('avishkar',(err,result)=>{ 
//     if(err){ 
//         console.error('error creating database: ',err)
//     }
//     else{ 
//         console.log('Database created successfully')
//     }
//     mongoose.connection.close;
// })

const express=require('express')
const app=express();
const mongoose=require('mongoose')

app.use(express.json())
mongoose.set('strictQuery',true)

mongoose.connect('mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/Rock?retryWrites=true&w=majority&appName=Cluster0')

.then(()=>{ 
    console.log('Connection created')
})
.catch((err)=>{ 
    console.log(`There will be some error ${err}`)
})

app.listen(4000)

