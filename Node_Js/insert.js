//Insert Once
//Insert many

const {MongoClient}=require('mongodb');
const url='mongodb+srv://avishkargawali120:9730328530@cluster0.6nqytzp.mongodb.net/demo20?retryWrites=true&w=majority&appName=Cluster0'

const client=new MongoClient(url) 

async function run(){ 
    try{ 
      await client.connect();
      const db=client.db();
      const myobj=[{name:"Ashok",age:"15",address:"dubai"},
      {name:"Abhay",age:"12",address:"America"},
      {name:"Tushar",age:"22",address:"UP"},
      {name:"Akshay",age:"20",address:"MP"}
    ]

      const result=await db.collection('mydatabase').insertMany(myobj)

      console.log(`inerted ${result.insertedCount} record with id:${result.insertedId}`)

    }
    catch(err){ 
        console.log('Error: ',err)
    }
    finally{ 
        client.close()
    }
}

run()