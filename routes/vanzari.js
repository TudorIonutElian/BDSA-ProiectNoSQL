const express = require('express');
const vanzare = require('../models/Vanzari');
const router = express.Router();


router.get('/', async (req, res)=>{

});

router.get(`/:id`, async (req, res)=>{

});

router.post(`/`, (req, res)=>{
    console.log(req.body);
});



module.exports = router;