

/*****Synchronous Method */

// const fs =require('fs');

// // fs.writeFileSync('file.txt', "Hello World");

// // fs.appendFileSync('file.txt', " Bye!");

// // const data = fs.readFileSync('file.txt');
// // console.log(data.toString());

// // const nwedata = fs.readFileSync('file.txt', 'utf-8');
// // console.log(data);

// // fs.renameSync('file.txt','read.txt');

// // fs.unlinkSync('read.txt')





/*******Asynchronous Methods*******/

// const fs = require('fs');


// fs.writeFile('file.txt', "Hello world", (err)=>{
// console.log("sucess")
// console.log(err)

// })
// fs.writeFile('file.txt', " Bye!", (err)=>{
    // console.log("sucess")
    // console.log(err)
    // })
    
    // fs.appendFile('file.txt', " welcome to my world of hell", (err)=>{
    // console.log("sucess")
    // console.log(err)
    
    // })

    // fs.readFile('file.txt', 'utf-8', (err,data) =>{
    //     console.log(data)
    //     console.log(err)
    // })


    // fs.unlink('file.txt' ,(err) =>{
    //     console.log("sucess")
    // } );
// fs.checkExist()


// const os = require('os')

// // console.log(os.arch());
// // console.log(os.hostname());
// console.log(os.platform());
// console.log(os.freemem());
// console.log(os.tmpdir());

// console.log(os.type());
// const mem = os.freemem()/1024/1024/1024;  //finding avilable  momory

// console.log(mem);
// console.log(os.type());
// const tmem = os.totalmem()/1024/1024/1024;

// console.log(tmem);



// const path = require('path')

// // console.log(path.dirname("C:/Users/SSD/Desktop/learnby/project/NodeJS/Practice/index.js"))
// // console.log(path.basename("C:/Users/SSD/Desktop/learnby/project/NodeJS/Practice/index.js"))
// // console.log(path.extname("C:/Users/SSD/Desktop/learnby/project/NodeJS/Practice/index.js"))

// // console.log(path.parse("C:/Users/SSD/Desktop/learnby/project/NodeJS/Practice/index.js"))
// console.log(path.parse("C:/Users/SSD/Desktop/learnby/project/NodeJS/Practice/index.js").root)
// console.log(path.parse("C:/Users/SSD/Desktop/learnby/project/NodeJS/Practice/index.js").base)




// /**********************nodemon working*******************/
// console.log("Hello again");
// console.log("good to see you");

// console.log("bye take care")




// const url = require('url');

// const add = "https://github.com:8080/jbittu?tab=repositories"

// const paresedadd = url.parse(add, true);

// console.log(paresedadd.hostname);
// console.log(paresedadd.href);
// console.log(paresedadd.hash);
// console.log(paresedadd.pathname);
// console.log(paresedadd.port);
// console.log(paresedadd.query);
// console.log(paresedadd.search);
// console.log(paresedadd.slashes);




/***********************************Event Module******************/

// const EventEmitter = require('events');

// const event = new EventEmitter();

// console.log(event);


// event.on('greet', ()=>{
//     console.log("hello Everyone")
// })
// event.emit('greet')


///////******************JSON*****************************////////////////

// const user = {
//     name:"wqcke",
//     age: 66,
//     add : "cwcecwe"
// }

// const jsondata = JSON.stringify(user,null, 2);

// console.log(jsondata);

// const jsonuser = `{
//     "name":"wqcke",
//     "age": 66,
//     "add" : "cwcecwe"
// }`

// const user = JSON.parse(jsonuser);

// console.log(user);

///////******************HTTP Module*****************************////////////////

// const http = require('http')

// const server = http.createServer((req,res)=>{
// res.write("Data Send!!");
// res.end();
// });


// server.listen(8000)


///////******************RENDERING STATIC FILE(eg. static html)*****************************////////////////

const express = require('express')

const app = express();

app.use(express.static('public'));

app.listen(8000)