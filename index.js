//const colors=require('colors');
//console.log('hello'.green);

//console.log("package.json");
//console.log("Try nodemon");
/*
const http=require('http');
http.createServer((resp,req)=>{

}).listen(6000);
*/
//console.log(process.argv)
//const fs=require('fs');
//const input=process.argv;
//fs.writeFileSync('apple.txt','this is my apple file')
/*
const fs=require('fs');
const path =require('path');
const dirPath=path.join(__dirname,'files');
for(i=0;i<5;i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple txt file");
}
*/
/*
const fs=require('fs');
const path =require('path');
const dirPath=path.join(__dirname,'crud');
const filePath =`${dirPath}/apple.txt`;
fs.writeFileSync(filePath,'this is simple text file');
*/
/*
console.log("start exe...");
console.log("logic exe...");
setTimeout(()=>{
    console.log("logic exe...");
},2000)
console.log("end exe...");
*/
/*
let a=10;
let b=20;

let waitingData= new Promise((resolve,reject )=>{
    setTimeout(()=>{
        resolve(30)

    },2000)

})

waitingData.then(( data)=>{
    b=data;
    console.log(a+b);

})
*/
/*
const express=require("express");
const app=express();
app.get('',(req,res)=>{
    res.send('hello,this is my home page ');

});
app.get('/about',(req,res)=>{
    
    res.send('hello this my home page');
});
app.listen(5000);
*/
/*
const express=require("express");
const app=express();
app.get('',(req,res)=>{
    res.send('hello,this is my home page ');

});
app.get('/about',(req,res)=>{
    
    res.send(`
    <input type="text" placeholder= "username"/>
    `);
});
app.listen(5000);
*/
/*

const express=require("express");
const Path=path("path");
const app=express();
const PublicPath = path.join(__dirname,'PublicPath');
app.use (express.static(PublicPath));
app.listen(5000);
//expressjs  {   <%= %>    }
*/
const express=require('express');
const app=express();
const reqFilter =(req,resp,next)=>{
    console.log('reqFilter');
    next();
}
app.use(req.Filter)

app.get('/',(req,resp)=>{
    resp.send('welcome to home page')

})
app.listen(5000)