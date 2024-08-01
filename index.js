const express = require('express');
const app = express();
const path = require('path');
const requests = require('requests');
const hbs = require('hbs');
const location = path.join(__dirname);
app.set("views",location)
app.set("view engine","hbs");
const partials = path.join(__dirname,'/partials');
console.log(partials)
hbs.registerPartials(partials)

app.get('/',(req,res)=>{
   res.render('project')
});
app.get('/weather.hbs',(req,res)=>{
    res.render('weather')
})

app.get('*',(req,res)=>{
    res.render('error')
})
app.listen(5000,()=>{
    console.log("done on 5000")
})