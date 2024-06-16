

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

    // const result=await db.collection('mydatabase').findOne({})
    // const result=await db.collection('mydatabase').find({}).toArray()
     const result=await db.collection('mydatabase').find({},{projection:{ 
        _id:0,name:1
     }}).toArray()

     console.log(result)
   //  console.log(result._id)
  // console.log(result.name)
 // console.log(result.address)
// console.log(result.forEach((ele)=>{ 
//     console.log(ele.name)
// }))
    }
    catch(err){ 
        console.log('Error: ',err)
    }
    finally{ 
        client.close()
    }
}

run()