const express = require('express');
//var favicon = require('serve-favicon');
const app = express();
const path = require('path');
const router = express.Router();
//app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.static(__dirname+"/"))

router.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/nextpage', function(req,res){
  res.sendFile(path.join(__dirname+'/nextpage.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/auth', function(req,res){
  res.sendFile(path.join(__dirname+'/auth.html'));
  //__dirname : It will resolve to your project folder.
});


//add the router
app.use('/auth', router);
app.listen(process.env.port || 80);

console.log('Running at Port 80');