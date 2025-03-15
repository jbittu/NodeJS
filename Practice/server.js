// const http = require('http'); 



// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello! This is a GET request response.');
//     } 
//     else if (req.method === 'POST') {
//         let body = '';
//         req.on('data')
//         req.on('end', () => {
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({ message: 'POST request received' }));
//         });
//     } 
//     else {
        
//         res.writeHead(405, { 'Content-Type': 'text/plain' });
//         res.end('Method Not Allowed');
//     }
// });


// server.listen(8080)


const express = require('express')

const app = express();

app.use(express.static('public'));

app.listen(8000)