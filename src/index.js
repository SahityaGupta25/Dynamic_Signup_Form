const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const collection = require('./mongodb')

const tempelatePath = path.join(__dirname,'../tempelates')

app.use(express.json())
// ~ Defining that our view engine is 'HBS'
app.set("view engine",'hbs')
// ~ As I am using 'tempelates' instead of views so I am telling nodejs to take this name

app.use(express.urlencoded({extended:false}))

app.set("views",tempelatePath)

app.get('/',(req,res)=>{
    res.render('login.hbs');
    
})
app.get('/signup',(req,res)=>{
    res.render('signup.hbs');

})

app.post('/login',async (req,res)=>{
    const data ={
        name:req.body.name,
        password:req.body.password
    }
    //* Giving data to MOngoDB
    await collection.insertMany([data])
    //* after collecting information redirect to home page
    res.render("home.hbs")
})


app.listen(3000,()=>{
    console.log("Port is Connected");
})