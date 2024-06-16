const {MongoClient}=require('mongodb')
const url='mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/IPL?retryWrites=true&w=majority&appName=Cluster0'
const client =new MongoClient(url)

async function run(){ 
    try{ 
        await client.connect()
        const db=client.db()

       // const result=await db.collection('KKR').findOne()
      //  const result=await db.collection('KKR').find().toArray()
      const result=await db.collection('KKR').find({},{projection:{ 
        _id:0,name:1,email:1
      }}).toArray()

      console.log(result)

      
    }
    catch(error){ 
        console.log(error)
    }
    finally{ 
        client.close()
    }
}

run()