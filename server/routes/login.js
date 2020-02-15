var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var md5 = require('md5');
var nodemailer = require('nodemailer');
const session = require('express-session');


var sess; // global session, NOT recommended
// var session = require('express-session');
var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'teameuphony00@gmail.com',
     pass: 'euphony@123'
   }
 });
 
var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database:"socstop"
 });

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'socstop'
});
router.get('/login',(req,res,err)=>{
   res.render('index');
});
router.get('/register',(req,res,err)=>{
   res.render('signup');
});

module.exports = router;
