const express = require('express');

const router = express.Router();

router.use((req, res , next) =>{
    console.log(`received ${req.method} ${req.method}`);
    next();
});

router.get('/product', (req,res) => {
    res.send("<h1> This is product page</h1>");
})

router.get('/product/:id', (req,res) => {
    res.send(`Product ID: ${req.params.id}`);
})

module.exports = router;