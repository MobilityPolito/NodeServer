var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.json( {'chiave' : 'prova dal server'} )
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  //res.json( {'chiave' : 'prova dal server'} )

  var dict = { 'key1' : 'ciao'}

  res.json(JSON.parse(dict));
});

router.post('/api', function(req, res, next) {

  console.log(req.body);
  res.json({'chiave':'prova dal server'})
  
});

module.exports = router;
