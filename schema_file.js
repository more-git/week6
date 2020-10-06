var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var somethingSchema = new Schema({
    something: {type: String, index: true, unique: true}
}, {collection: 'something_collection'});
exports.somethingSchema = somethingSchema;

