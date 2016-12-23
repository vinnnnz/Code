const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/portfolio');

var DB = mongoose.connection;

var Skill = require("./model/Skill");

DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', function(){
    console.log("DB connection opened");
});

/*var newSkill = new Skill({
    name:'Java',
    version:'1.6, 1.7, 1.8',
    rating: '8',
    numberOfYear: '4.3 Years'
});

newSkill.save();*/

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/views/style'));
app.use(express.static(__dirname + '/views/js'));
app.use(express.static(__dirname + '/views/fonts'));
app.use(express.static(__dirname + '/views/css'));
app.use(express.static(__dirname + '/views/images'));

app.set('view engine', 'ejs');

app.listen(8000, function() {

    console.log("listening on 8000");
});

app.get('/', (request, response) => {

    response.render('index.ejs', {title:"Welcome"});
});

app.get('/skills', (request, response) => {

     response.setHeader('Content-Type', 'application/json');

     Skill.find({}, function(err, skills) {

         if(err) throw err;
         
        response.send(JSON.stringify(skills));
     });
});

app.get('/skill', (request, response) => {

     response.render('skill.ejs', {title:"skill"});
});