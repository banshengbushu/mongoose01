'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemsSchema = new Schema({
  name:String,
  password:String

});
module.exports = mongoose.model('Supermarket',itemsSchema);

