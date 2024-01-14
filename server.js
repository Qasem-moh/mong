const express=require('express')
const {mongoose}=require("mongoose")
const app=express()
require('dotenv').config();
const port=5410

app.use(express.json())
const routes = require('./routes/routes');
app.use('/api', routes)
// const url="mongodb://localhost:27017/person"
// const url="mongodb+srv://qasemcoder2028:kGF4HcwbVtiCgf4G@togo20.rzcv24v.mongodb.net/?retryWrites=true&w=majority"
const url="mongodb+srv://qasemcoder2028:kGF4HcwbVtiCgf4G@togo20.rzcv24v.mongodb.net/testDatabase"
mongoose.connect(url,{
    useNewUrlParser: true,
})
    .then(result=>console.log("connected"))
    .catch(err=>console.log(err))



app.listen(port,()=>{
    console.log('server is running')
})