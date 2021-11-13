const mongoose = require('mongoose');
const User = require('../models/User');

const findAllUsers = (req,res)=>{
    User.find((err,users)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(users);
    })
}
const findById =(req,res)