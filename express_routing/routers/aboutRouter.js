const express = require('express');

const router = express.Router();

router.use((req, res , next) =>{
    console.log(`received ${req.method} ${req.method}`);
    next();
});

router.get('/about', (req,res) => {
    res.send("<h1> This is about page</h1>");
})

module.exports = router;