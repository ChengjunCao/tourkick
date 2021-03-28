const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandSchema = new Schema({
	name: {type: String, default: ''},
	year: {type: Number, default: ''},
})

module.exports = mongoose.model('Band', bandSchema);