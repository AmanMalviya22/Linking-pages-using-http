const express=require('express');
const port=8000;

const app=express();


app.get('/',function(req,res){
    res.send('<h1>yup server is running</h1>');
});




app.listen(port,function(err){
    if(err){
        console.log('error in running the server',err);
    }
    console.log("server is started");

})