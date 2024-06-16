//Insert One 
//Insert Many

const {MongoClient}=require('mongodb');
const url='mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/IPL?retryWrites=true&w=majority&appName=Cluster0'

const client=new MongoClient(url) 

async function run(){ 
    try{ 
       await client.connect()
       const db=client.db()

       const x=[{name:"Sanju",age:"30",address:"Kerala"},
       {name:"Rohit",age:"36",address:"Mumbai"},
       {name:"Virat",age:"35",address:"Punjab"}]

       const result=await db.collection('RR').insertMany(x)

       console.log(`insertd ${result.insertedCount}`)
    }
    catch(err){ 
        console.log(err)
    }
    finally{ 
        client.close()
    }
}

run()