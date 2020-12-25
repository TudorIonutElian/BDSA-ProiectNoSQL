const express = require('express');
const produs = require('../models/Produs');
const router = express.Router();


router.get('/', async (req, res)=>{
    try {
       //const produseAll = await produs.find({});
       let toateProdusele = null;
       await produs.find().then(data => toateProdusele = data);
       res.json(toateProdusele);
        
    } catch (error) {
        console.log({message: error});
    }
    
});

router.get(`/:id`, async (req, res)=>{
    try {
        //const produseAll = await produs.find({});
        let produsFinal = await produs.findById({"_id": `${req.params.id}`});
        res.json(produsFinal);
     } catch (error) {
         console.log({message: error});
     }
});

router.post(`/`, (req, res)=>{
    console.log(req.body);
});



module.exports = router;