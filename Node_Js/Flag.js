// const fs=require('fs')
// const http=require('http')

// http.createServer((req,res)=>{
//     console.log("Server created")
//     fs.open('index.html','r',(err,data)=>{
//         if(err) throw err
//         console.log(data)
//         console.log("file opened!!")
//     })
// }).listen(4000)


// const fs=require('fs')
// const http=require('http')

// http.createServer((req,res)=>{ 
//     console.log("Server created!!")
//     fs.open('input.txt','r',(err)=>{ 
//         if (err) throw err
//         console.log("File opend")

//         return res.end();
//     })
// }).listen(4000)

// const fs=require('fs')
//  fs.open('input.txt','r+',(err,file)=>{ 
//     if(err) { 
//         console.error("Error file opening",err)
//         return
//     }
//     console.log("file open for reading and write")
//  })

// const fs=require('fs')
// fs.open('input.txt','wx',(err,file)=>{ 
//     if(err){ 
//         console.log("Error opening file: ",err)
//         return;
//     }
//     console.log("file opening")
// })


// const fs=require('fs')
// fs.open('input.txt','a+',(err,file)=>{ 
//     if(err){ 
//         console.log('error opening file for ',err)
//         return
//     }
//     console.log('file open for appending and reading!! ')
// })

//const fs=require('fs')
// const fs=require('fs')

// let fileExist=fs.existsSync('D:\Web\Javascript\JavaScript\array.js')
// console.log("input.txt exist: ",fileExist);

// fileExist=fs.existSync('www.txt')
// console.log("")

// function getCurrentFileName(){ 
//     console.log("\n current filename");
//     fs.readdirSync(__dirname).forEach(file => {
//         console.log(file)
//     });
// }

// // getCurrentFileName()
// const fs=require('fs')
// fs.open('input.txt','r',(err,fd)=>{ 
//     if(err){ 
//         console.error("Error occure while opening: ",err)
//     }
//     console.log("file opening")
//     console.log(fd)
//     fs.close(fd,(err)=>{ 
//         if(err){ 
//             console.log("Error while closing : ",err)
//         }
//         console.log("Successfully close")
//     })
// })

// // Make a directory
const fs=require('fs')
const path=require('path')

fs.mkdir(path.join(__dirname,'Mydir'),(err)=>{ 
    if(err) { 
       return  console.error(err)
    }
    console.log('directory succesfully created!!')
})
//"mongodb": "^6.5.0",