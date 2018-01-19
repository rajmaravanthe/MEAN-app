//Import the mongoose module
var mongoose = require('mongoose');


//create a schema

var Schema = mongoose.Schema;
var flightSchema = new Schema({
    flightfrom: String,
    flightto: String,
    airlines: String
});


//create a Model
var Company = mongoose.model('flight', flightSchema);

//export the model
module.exports = Company;
