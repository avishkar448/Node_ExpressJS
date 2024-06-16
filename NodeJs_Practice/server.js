// const http=require('http')
// http.createServer((req,res)=>{ 
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write("<h1>Hello Avishkar!! </h1>")
//     res.end()
// }).listen(4000)

//write File and read file

// const http=require('http')
// const fs=require('fs')

// http.createServer((req,res)=>{ 
//     fs.writeFile('index.html',"<h1>I am Web devloper!!</h1>",(err)=>{ 
//         if(err){ 
//             console.log("error occure!! ",err)
//         }
//         console.log('file created!')
//     })

//     fs.readFile('index.html',(err,data)=>{
//         if(err){ 
//             console.error("Error occure: ",err)
//         }
        
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//        return res.end()
//     })
// }).listen(4000)

// Rename file
//var fs=require('fs')
// fs.rename('index.html','avishkar.html',(err)=>{ 
//     if(err) throw err
//     console.log('file rename')
// }) 

// fs.unlink('index.txt',(err)=>{ 
//     if(err) throw err
//     console.log("file deleted")
// })

// fs.appendFile('abc.txt',' I am web devloper',(err)=>{ 
//     if(err) throw err
//     console.log('file updated!')
// })

//read multiple file
// const fs=require('fs')
// const files=['xyz.txt','abc.txt']

// files.forEach((Element)=>{ 
//     fs.readFile(Element,'utf-8',(err,data)=>{ 
//         if(err){ 
//             console.log("Error occure! ",err)
//         } 
//         console.log("Data: ",data)
//         console.log("\n")
//     })
// })

