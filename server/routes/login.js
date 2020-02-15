var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var spawn = require('child_process').spawn;
var py    = spawn('python', ['input1.py']);
var moment = require('moment');
var fs = require('fs');
var request = require('request');
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var md5 = require('md5');
var nodemailer = require('nodemailer');
const session = require('express-session');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'socstop'
});

var con = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'socstop'
 });
 
var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'teameuphony00@gmail.com',
     pass: 'euphony@123'
   }
 });
