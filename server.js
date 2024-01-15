const express=require('express')
const {mongoose}=require("mongoose")
const app=express()
require('dotenv').config();
const port=process.env.PORT||5410

app.use(express.json())
const routes = require('./routes/routes');
app.use('/', routes)

mongoose.connect(process.env.URL,{})
    .then(result=>console.log("connected"))
    .catch(err=>console.log(err))



app.listen(port,()=>{
    console.log('server is running')
})