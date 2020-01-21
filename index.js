/*
    1. Create a Web Server  that listens to HTTP request
    2. Code our Web Server to respond to specific HTTP Request
    3. Generate response to our client
*/


//import express into our file
const express = require("express");
const exphbs  = require('express-handlebars');


//create express app object
const app = express();
var hbs = exphbs.create({ /* config */ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get("/",(req,res)=>{
 res.render("index");
});


app.get("/products",(req,res)=>{
    res.render("products")

});



app.get("/contactus",(req,res)=>{ 
    res.render("contactus");
});



//This creates a web server!!!!!!
app.listen(3000,()=>{

    console.log(`Web Server connected!!!`);
})