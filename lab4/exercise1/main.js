/**
 * Create a Reactive HTTP server that serves files when url query parameter is passed with the request. 
 * The file path is provided in the URL like this: http://localhost:4000/?url=path/to/my/file.txt   
 * Your logic of reading the file should be in a separate child process.
 */

 const http = require('http');
 const { fork } = require('child_process');
 const url = require('url');
 const { Subject } = require("rxjs");
 const subject = new Subject();

 function readRequestedFile(reqres){
    const myUrl = url.parse(reqres.req.url,true);
    const filePath = myUrl.query.url;
    // const filePath = 'response.txt';

    if(filePath){
        const childProcess = fork("lab4/exercise1/child.js");
        childProcess.send(filePath);
        childProcess.on('message', data => {
            reqres.res.write(data);
            reqres.res.end();
        });
    
        childProcess.on('error', error => {
            reqres.res.end(error.message);
        });
    }
 }

 subject.subscribe(readRequestedFile);

 http.createServer((req,res)=>{
    subject.next({req: req, res:res});
 }).listen(4000);
 