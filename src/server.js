const express = require('express');
require('dotenv').config();
const { urlencoded } = require('express');
const router = require('./routes/index');
const cors = require('cors');
const mustache = require("mustache-express");
const path = require("path");

const server = express();

server.engine('mustache', mustache());
server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));

server.use(express.static(path.join(__dirname,'../public')));

server.use(cors());
server.use(urlencoded({extended:true}));
server.use(router);
const port = process.env.PORT;
server.listen(port,(e)=>{
    console.log(`server is running on ${process.env.BASE}${port}`)
})