const express = require('express');
const router = express.Router();

const crypto = require('crypto'),
algorithm = 'aes256',
password = 'asaadsaad';


const decrypt = function(text){
    var decipher = crypto.createDecipher(algorithm,password)
    var decriptedText = decipher.update(text,'hex','utf8')
    decriptedText += decipher.final('utf8');
    return decriptedText;
}


router.get('/', (req,res, next)=>{

    const collection = req.app.locals.db.collection('week2');
    const doc = collection.findOne({});

    doc.then((value) => {
        const decriptedText = decrypt(value.message);
        res.status(200).json(decriptedText);
    });

});

module.exports = router;
