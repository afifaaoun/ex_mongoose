const express=require('express');
const connectDb = require('./config/connncetDb');
const contactRouter = require('./routes/contact');
const app= express();
const port=5000;

// var bodyParser=require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.json()); // les fichiers mte3i les formats mte3hom json 'javascript notation' ma3neha attribut : valeur
app.use('/api/user',contactRouter)
connectDb()
// run server

app.listen(port,(err)=>{
    err? 
    console.error(err)
    :
    console.log(`server running in success in port: ${port}`)
})