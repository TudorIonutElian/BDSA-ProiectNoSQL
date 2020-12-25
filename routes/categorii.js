const express = require('express');
const produs = require('../models/Produs');
const router = express.Router();


router.get('/', async (req, res)=>{
    try {
        //const produseAll = await produs.find({});
        let produsFinal = null;
        await produs.find({}).then(data => produsFinal = data);
        res.json(produsFinal);
    } catch (error) {
        console.log({message: error});
    }
    
});

router.get(`/:id`, (req, res)=>{
    res.send(`Suntem in pagina produsului ${req.params.id}`);
});

router.post(`/`, (req, res)=>{
    console.log(req.body);
});



module.exports = router;