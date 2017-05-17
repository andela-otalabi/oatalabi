var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('./config');

var app = express();
var dbUrl;

if (process.env.ENV === 'test'){
    dbUrl = config.testDb;
} else{
    dbUrl = config.db;
}

mongoose.connect(dbUrl)
mongoose.connection.on('open', function(err){
    if (err) {
        console.log(err);
    }
    console.log('db connected to: ' + dbUrl);
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(methodOverride('X-HTTP-Method-Override'));

require('./app/routes')(app);

app.listen(3000, function(err){
    if(err){
        console.log('error: ', err);
    }
    console.log('app server running');
});

module.exports = app;