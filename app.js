var express = require('express');
var path    = require('path');
var cons    = require('consolidate');
var dustjs  = require('dustjs-linkedin');

// var people = require('./people.json');

var app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.engine('dust', cons.dust);
// app.set('view engine', 'dust');
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res) {
//   res.render('index', {layout: 'layout', people: people.people});
// });

app.use(express.static(__dirname + '/', { extensions: ['html'] }));
app.use(express.static(__dirname + 'public'));
app.use(express.static(__dirname + 'bower_components'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 5000);
 
app.listen(port, host);
console.log('App started on port ' + port);