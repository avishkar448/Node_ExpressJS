const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
    const filePath = '.' + req.url;
    console.log(filePath)
    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        } 
        const extname = path.extname(filePath);
        let contentType = 'text/html';
        
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
            case '.wav':
                contentType = 'audio/wav';
                break;
        }
        res.writeHead(200, {'Content-Type': contentType});
        res.write(data);
        return res.end();
    });
}).listen(4000);


