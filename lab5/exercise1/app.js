const express = require('express');
const axios = require('axios');
const app = express();

app.set('x-powered-by',false);
app.enable('strict routing');
app.enable('case sensitive routing');
app.enable('trust proxy');


app.get('/users', (req,res)=>{
    axios.get('https://randomuser.me/api/?results=10')
    .then((data)=>{
        console.log(data);
        // res.writeHead(200, {'Content-Type':'application/json'});
        res.set('Cache-Control','private,max-age=86400')
        res.json(data.data);
    })
    .catch(error => {
        res.end(error.message);
    });
});

app.listen(3000, () => `Listening on 3000 port.`);
