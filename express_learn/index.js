// const http = require('http')


// const server = http.createServer((req, res) => {
//     res.write("<h1>hello there nice to meet</h1>")
// })


// server.listen(8080)

const express = require('express');

const app = express();

const port = 8080;


// app.get('/get' ,(req , res) => {
//     res.send('Get request');
// });

// app.post('/post',(req, res) =>{
//     res.send('POST request');
// });
// app.put('/put' , (req , res) => {
//     res.send('Put Request');
// });

// app.delete('/delete',(req,res)=>{
//     res.send('DELETE request');
// });

app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Server running at port : ${port}`);
});