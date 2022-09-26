// var http = require('http')
// var fs = require('fs')
// http.createServer((res,req)=>{
//     fs.readFile('./index.html', (err, data)=>{
//         res.write(data)
//         return res.end()
//     })
// }).listen(9000)




const http = require('http');
const fs = require('fs').promises;
const requestListener = function (req, res) {
    fs.readFile("./index.html")
    .then(content=>{
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(content);
    })
}

const server = http.createServer(requestListener);
server.listen(8000);