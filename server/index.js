require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then((dbInstance)=>{
    app.set('db', dbInstance);
    console.log('DB says helo?')
})
.catch((err)=>{
    console.log(err);
})

app.post(`/api/login`, (req, res)=>{
    let {username, password} = req.body;
    
})



const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Port ${port} is listening to your gibberish...`)
});