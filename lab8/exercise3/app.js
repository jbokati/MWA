const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();
const locationRoutes = require('./routes/location');
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
 
app.set('x-powered-by',false);
app.enable('case sensitive routing');
app.enable('trust proxy');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/locations', locationRoutes);


client.connect(function(error){
    app.locals.db = client.db('lab8');
    const port = 3600;
    app.listen(port, () => console.log(`Listening on ${port} port.`));
})

