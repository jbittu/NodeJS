const express = require('express');
const router = express.Router();

router.use((req, res , next) =>{
    console.log(`received ${req.method} ${req.method}`);
    next();
});

router.get('/users', (req,res) => {
    res.send("<h1> This is user page</h1>");
})

router.get('/users/:id', (req,res) => {
    res.send(`Users ID: ${req.params.id}`);
})

module.exports = router;