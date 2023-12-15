const express = require('express')
const mongoose = require('mongoose')

const rout = require('./router/routes')

const app = express();

app.use(express.json())

app.use('/api',rout) //http://localhost:6000/api/


// app.get('/',(req,res)=>{
//     res.send('Hello Express')
// })

// app.get('/home',(req,res)=>{
//     res.send('Hello Express home')
// })

// app.get('/home/:name/:age',(req,res)=>{
//     username = req.params.name;
//     age = req.params.age;
//     res.send(`Hello Express home ${username} My age ${age} `)
// })

mongoose.connect('mongodb+srv://username:password@cluster0.91awbo4.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('DB Is Connect Succefully')
    app.listen(6000)
})
//vc389hiE1S60S0Fy
