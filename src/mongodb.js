const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log("Mongodb Connected");
})
.catch(()=>{
    console.log("Not Connected");
})

const loginSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})



const collection = mongoose.model("form",loginSchema);

module.exports = collection