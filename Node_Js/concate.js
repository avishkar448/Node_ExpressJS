const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/form') {
        fs.readFile('form.html', function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end('404 Not Found');
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if (pathname === '/concatenate') {
        const query = parsedUrl.query;
        const string1 = query.string1;
        const string2 = query.string2;
        const result = string1 + string2;
    
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Concatenated String:</h1>');
        res.write('<p>' + result + '</p>');
        return res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end('404 Not Found');
    }
}).listen(4000);

console.log('Server running at http://localhost:4000/');
