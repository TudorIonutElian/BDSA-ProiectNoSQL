const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Suntem in pagina produse");
});

router.get(`/:id`, (req, res)=>{
    res.send(`Suntem in pagina produsului ${req.params.id}`);
});


module.exports = router;