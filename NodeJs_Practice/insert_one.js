const {MongoClient}=require('mongodb')
const url='mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/IPL?retryWrites=true&w=majority&appName=Cluster0'

const client=new MongoClient(url)

async function run(){ 
    try{
        await client.connect()
        const db=client.db()
        const obj={name:"Avishkar Gawali",age:45,address:"Pune"}

        const result=await db.collection('RR').insertOne(obj)

        console.log(`Id: ${result.insertedId}`);
    }
    catch(error){ 
        console.log(error)
    }
    finally{
        client.close();
    }
}

run()