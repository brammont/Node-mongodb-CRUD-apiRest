const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 4000
const User = require('./api/users')

//configuracion
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json())

//middlewares
mongoose.connect(
    "mongodb://localhost/usuarios",
    { useNewUrlParser : true },
    (err,res)=>{
        err && console.log("error conectando a la db");
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    }    
)

