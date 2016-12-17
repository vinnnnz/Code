const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/portfolio');

var DB = mongoose.connection;

DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', function(){
    console.log("DB connection opened");
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/views/style'));

app.set('view engine', 'ejs');

app.listen(8000, function() {

    console.log("listening on 8000");
});

app.get('/', (request, response) => {

    response.render('index.ejs', {title:"Welcome"});
});