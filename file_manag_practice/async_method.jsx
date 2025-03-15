const fs = require("fs");

/*********************** *write Data********************** */



fs.writeFileS('file.txt', 'this is my snchronous methos',(err)=>{
if(err){
    console.log('Error:',err);
}
console.log('sucess');
});







/*********************** *read and display Data********************** */

 const data=fs.readFile('file.txt','utf-8',(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data)
            
        });
      
        
        
        
        
/*********************** *rename file********************** */

fs.rename('file.txt','newfile.txt',(err)=>{
if(err){
    console.log(err);
}
console.log('sucess');
    });
    



/*********************** *delete file********************** */

fs.unlink('file.txt',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('sucess');
});






