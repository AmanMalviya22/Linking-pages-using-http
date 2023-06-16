const express=require('express');
const path=require('path');
const port=8000;



const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



//created controller for home route or entry point
app.get('/',function(req,res){
    
    res.render('home',{title:"my express app"});
});

app.get('/practice',function(req,res){
    res.render('practice',{ title:'my practice app'});
});




app.listen(port,function(err){
    if(err){
        console.log('error in running the server',err);
    }
    console.log("server is started");

})