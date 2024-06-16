const {MongoClient}=require('mongodb');
const url='mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/Company?retryWrites=true&w=majority&appName=Cluster0'

const client=new MongoClient(url)

async function run(){ 
    try{ 
        await client.connect();
        const db=client.db();

        const x={name:"Omkar shript",email:"omshri@gmail.com",phone:8569741232,salary:30000,date:Date.now()}

       // const result=await db.collection('employee').insertOne(x)
       // const result=await db.collection('employee').findOne()
     //   const result=await db.collection('employee').find().toArray()
        const result=await db.collection('employee').find({},{projection:{ 
            _id:0,name:1
        }}).toArray()

        //console.log(`insert ${result.insertedCount}`)
        console.log(result)
    }
    catch(error){ 
        console.log(error)
    }
}

run()