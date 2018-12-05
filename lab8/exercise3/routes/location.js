const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');


router.get('/find', (req,res, next)=>{

    const collection = req.app.locals.db.collection('locations');

    collection.find({
         location : { $near : [-91.9665342, 41.017654] }
    })
    .limit(3).toArray((err,result)=>{
        if(err){
            return res.status(500).json({error:err});
        }
        return res.status(200).json({data:result});
    });

});


router.post('/insert',[
    check('name','Name filed is required.').exists(),
    check('category','Category filed is required.').exists(),
    check('lat','Latitude filed is required.').exists(),
    check('long','Longitude filed is required.').exists(),
    check('lat','Latitude should be numeric value.').isNumeric(),
    check('long','Longitude should be numeric value.').isNumeric()
], (req,res, next)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({errors: errors.array()});
    }

    const newLocation = {
        name: req.body.name,
        category: req.body.category,
        location: [req.body.long,req.body.lat]
      };

      
    const collection = req.app.locals.db.collection('locations');
    collection.insertOne(newLocation,(err,insertedLocation)=>{
        if(err) return res.status(500).json({error: err});
        collection.createIndex({location: '2d'});
        // collection.ensureIndex({location:"2dsphere"});
        // req.app.locals.db.collection('locations').ensureIndex({"location":"2dsphere"});
        return res.status(201).json({data:insertedLocation});
    });
    
    
});

module.exports = router;
