
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, required: true},
    decription: String,
    image: {type: String, required: true},
    videoID: {type: String, required: true},
},{
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);