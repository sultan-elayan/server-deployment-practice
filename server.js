'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

function start(port){

    app.listen(port , ()=>console.log (`listening to port : ${port}`))
}

app.get('/', (req,res)=>{
    res.send('hello world !!')
} )

app.post('/error', (req,res)=>{
    let arr = 5;

    arr.map(arr=>console.log(arr));
    res.send ('wrong data')
} )

app.get('/data', (req,res)=>{

    res.json({
        id:1,
        vehicle: "car" ,  
        name : "bmw",
        wheel : 4
    })
})

app.use('*' , notFoundHandler);
app.use(errorHandler);

module.exports={
    app : app ,
    start: start
}