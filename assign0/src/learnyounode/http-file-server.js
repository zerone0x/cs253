// TODO: Replace this with your solution.
var fs = require('fs')
const http = require('http')
     const server = http.createServer(function (req, res) {
       // request handling logic...
       res.writeHead(200, { 'Content-Type': 'text/plain' })
       fs.createReadStream(process.argv[3]).pipe(res)
     })
     server.listen(Number(process.argv[2]))