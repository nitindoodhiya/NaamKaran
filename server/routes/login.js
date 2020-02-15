var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var md5 = require('md5');
var nodemailer = require('nodemailer');
const session = require('express-session');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
