var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var skillSchema = new Schema({
    name : String,

    numberOfYear : String,

    rating : String,

    version : String
});

var Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;