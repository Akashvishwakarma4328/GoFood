const express = require('express');
const app = express();
const port = 3300;
const mongoDB=require ("./db");
mongoDB();
 app.get('/' ,(req,res) => {
    res.send("helloworld")
 })

 app.listen(port ,()=>{
    console.log(`example is listining on ${port}`);
 })