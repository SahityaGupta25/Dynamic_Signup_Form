const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');

app.listen(3000,()=>{
    console.log("Port is Connected");
})