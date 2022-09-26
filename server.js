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
