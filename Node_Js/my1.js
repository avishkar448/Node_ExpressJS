// const http=require('http')
// const fs=require('fs')
// const path=require('path')

// http.createServer(function(req,res){ 
//     const filePath='.'+req.url
//     fs.readFile(filePath,(err,data)=>{ 
//         if(err){ 
//             res.writeHead(404,{'Content-Type':'text/html'})
//             return res.end('404 not found')
//         }
//         const extname=path.extname(filePath)
//         let contentType='text/html'

//         switch(extname){ 
//             case '.js':
//                 contentType='text/javascript'
//                 break
//         }
//         res.writeHead(200,{'Content-Type':contentType})
//         res.write(data)
//         return res.end()
//     })
// }).listen(4000)

const http=require('http')
const fs=require('fs')
const url=require('url')


http.createServer(function(req,res){ 
    const parsedUrl=url.parse(req.url,true)
    const pathname=parsedUrl.pathname;

    if(pathname==='/form'){ 
        fs.readFile('form.html',(err,data)=>{
            if(err){ 
                res.writeHead(404,{'Content-Type':'text/html'})
                return res.end('404 not found')
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            return res.end()            
        })
    }else if(pathname==='/concatenate'){ 
        const query=parsedUrl.query;
        const s1=query.s1;
        const s2=query.s2;
        const result=s1+s2 

        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>Concatinated string<h2>')
        res.write(`<h3>${result}<h3>`)
        res.end()
    }
    else{ 
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end('404 Not Found');
    }
}).listen(4000)