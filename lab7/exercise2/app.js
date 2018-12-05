const express = require('express');
const app = express();
const secretRoutes = require('./routes/secret');

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

app.set('x-powered-by',false);
app.enable('case sensitive routing');
app.enable('trust proxy');


app.use('/secret', secretRoutes);
// app.get('/test',(req,res,next)=>res.end('something is better than nothing'));

client.connect(function(error){
    app.locals.db = client.db('homework7');
    const port = 3000;
    app.listen(port, () => console.log(`Listening on ${port} port.`));
})

