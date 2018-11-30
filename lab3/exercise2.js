var http = require('http');
var path = require('path');
var fs = require('fs')
var myServer = http.createServer();

    // File sync
myServer.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myFile = fs.readFileSync(path.join(__dirname,'myFile.txt'),'utf8');
    res.end(JSON.stringify(myFile));
});
myServer.listen(3000, () => console.log('listening....'));


  // File async
myServer.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myFile = fs.readFile(path.join(__dirname, 'myFile.txt'), 'utf8', function (err, data) {
        res.end(JSON.stringify(data));
    });
});
myServer.listen(3000, () => console.log('listening....'));

  // Using Stream
myServer.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var readable = fs.createReadStream(path.join(__dirname, 'myFile.txt'), { encoding: 'utf8', highWaterMark: 1 *1024 });
    readable.on('data', function (chunk) {
         res.end('ss'+chunk);
  
    });
});
 myServer.listen(3000, () => console.log('listening....'));
