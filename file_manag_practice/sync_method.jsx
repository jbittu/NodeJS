const fs = require("fs");

/*********************** *write Data********************** */
try {
fs.writeFileSync('file.txt', 'this is my snchronous methos');
console.log('sucess');
}catch(err){
console.log('Error:',err);
}

/*********************** *read and display Data********************** */

try{
    const data=fs.readFileSync('file.txt','utf-8');
    console.log(data);
}catch(err){
console.log(err);
}
/************************rename file********************** */
try {
  fs.rename("file.txt", "newfile.txt");
  console.log("sucess");
} catch (err) {
  console.log(err);
}

/************************delete file********************** */

try {
  fs.unlinkSync("file.txt");
  console.log("sucess");
} catch (err) {
  console.log(err);
}
