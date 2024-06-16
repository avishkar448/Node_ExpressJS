// const http=require("http");
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write(req.url)
//     res.end();
// }).listen(4000)

// const http=require("http")
//  http.createServer(function(req,res){
//      res.write("My Name is Avishkar!!")
//      res.end();
//  }).listen(4000)

//Read File
// const fs=require('fs');
// const http=require('http')

// http.createServer((req,res)=>{
//     fs.readFile('index.html',(err,data)=>{
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write(data)
//         return res.end();
//     })
// }).listen(4000)

//Write file
// const fs=require('fs')
// fs.writeFile("input.txt","\n Feel the pain accept the pain ",(err)=>{
//     if(err) throw err
//     console.log("saved.....!")
// })

//Read and write
const fs =require('fs')
const http=require('http')

http.createServer((req,res)=>{
    fs.writeFile("avi.txt","Ware ware wa PAIN",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("data is written")
        fs.readFile("index.html",(err,data)=>{ 
            if(err){
                console.log(err)
            }
            console.log("data: "+ data.toString())
            res.write(data)
            return res.end()
        })
    })
}).listen(4000)
