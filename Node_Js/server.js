// const http = require("http");
// const uc = require("uppercase");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.write(uc(" Avishkar Ashok Gawali \n"));
//     res.write(uc(" Avishkar \n"));
//     res.write(uc(" Avishkar Gawali \n"));
//     res.end();
//   })
//   .listen(4000);

// const http=require("http")
// http.createServer(function(req,res){
//     res.write("My Name is Avishkar!!")
//     res.end();
// }).listen(4000)


// Read file
// const fs=require('fs');
// const http=require('http');

// http.createServer((req,res)=>{
//     fs.readFile('index.html',(err,data)=>{
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write(data)
//         return res.end();
//     })
// }).listen(4000)

//Write file

// const fs=require('fs')
// fs.writeFile('mynewfile.txt',"Hello Avishkar all the best!!",(err)=>{
//     if(err) throw err;
//     console.log('Saved...!')
// })

//Read and Write
// const fs=require('fs')
// const http=require('http')

// http.createServer((req,res)=>{
//     console.log("Server Created");
    
//     console.log("Writting into exixting file");
//     fs.writeFile('input.txt',"Heloo ha ji good morning!!",function(err){
//         if(err){
//             console.log(err)
//         }
//         console.log("Data written succesfully!!")
//         console.log("let's read newly written data")

//         fs.readFile("input.txt",function(err,data){
//             if(err){
//               return console.error(err);
//             }
//             console.log("Async read "+ data.toString())
//         })
//     })
// }).listen(4000)

// Rename file
// var fs=require('fs')
// fs.rename('input.txt','avishkar.txt',(err)=>{
//     if(err) throw err
//     console.log("Rename succesfully")
// })

//delete file

// var fs=require('fs')
// const http=require('http')

// http.createServer((req,res)=>{
//     console.log("server created")

//     fs.unlink("avishkar.txt",(err)=>{
//         if(err) throw err
//     })
//     console.log("deleted succesfully!!")
// }).listen(4000)


//Append file

// const fs=require('fs')
// const http=require('http')

// http.createServer((req,res)=>{
//     console.log("server created!!")

//     fs.appendFile('avi.txt','\nThis is append file',(err,data)=>{
//         if(err) throw err
//         console.log("file updated!!")
//         return res.end()
//     })
// }).listen(4000)


//Delete multiple file
// const fs=require('fs')
// const http=require('http')


// http.createServer((req,res)=>{
//     console.log("Server created...!!")
//     let x=['avi.txt','index.html']
//     x.forEach(function(element){
//         fs.unlink(element,(err)=>{
//             if(err) throw err
//         })
//     })
//     console.log("Successfully deleted!!")
// }).listen(4000)


// const { promises } = require('fs')
// const filepath=['input.txt','www.txt']

// async function readFilesParallel(filepaths){
//     try{ 
//         const fileContent=await promises.all()
//         filepaths.map(async(filepath)=>{
//             const data=await promises.readFile(filepath,'utf-8')
//         })
//     }
// }


// const { promises } = require('fs')
// const filepaths=['input.txt','www.txt']

// async function readFilesParallel(filepaths){
//     try{ 
//         const FileConcepts=await promises.all(
//             filepaths.map(async(filepath)=>{ 
//                 const data=await promises.readFile(filepath,'utf-8');
//                 console.log(`\n Content of ${filepath}`)
//                 console.log(data)
//                 return data;
//             })
//         );
//         console.log('\n all file are readed')
//     }
//     catch(err){
//         console.log(`error on reading file ${err.message}`)
//     }
// }
// readFilesParallel(filepaths)


