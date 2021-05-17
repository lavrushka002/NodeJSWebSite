const express = require('express');
const path = require('path');

//var favicon = require('serve-favicon');
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());


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

app.post('/auth', function (req, res) {
  console.log(req.body);
  if(req.body.login == 'admin' && req.body.pass == 'admin'){
    res.send({ok:'ok'});
  }else{
    res.send({ok:'notok'});
  }
});

//add the router
app.use('/', router);
app.listen(process.env.port || 80);

console.log('Running at Port 80');