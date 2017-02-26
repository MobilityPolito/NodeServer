var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api', function(req, res, next) {

  var dict = { 'key1' : 'ciao'}

  var obj = new Object();
  obj.name = "Raj";
  obj.age  = 32;
  obj.married = false;
  var jsonString= JSON.stringify(obj);

  res.json(jsonString);

});

router.post('/api', function(req, res, next) {

  // var dict = { 'key1' : 'ciao'}
  // console.log(req.body);
  // res.json(dict);

  var spawn = require('child_process').spawn,
    py = spawn('python', ['/Users/anr.putina/Desktop/REPORT/turin-mobility/Test/compute_input.py']),
    // data = [1,2,3,4,5,6,7,8,9],
    data = req.body,
    dataString = '';

  py.stdout.on('data', function(data){
    dataString += data.toString();
  });

  py.stdout.on('end', function(){
    //console.log(__filename);
    //console.log('Sum of numbers=',dataString);

    //console.log(JSON.parse(dataString));
    res.json(JSON.parse(dataString));

  });

  py.stdin.write(JSON.stringify(data));
  py.stdin.end();



});

module.exports = router;
