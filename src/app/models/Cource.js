
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    //cac key trong model phai giong vs cac key trong dataForm khi POST thi ms luu dc vao DB
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    videoID: {type: String, required: true},
    //them unique de khong bi trung slug (neu trung no se them 1 shortID dang sau VD:slug:"bui-quang-tuan-n6ABEMmln")
    slug: { type: String, slug: 'name', unique: 'true' }
},{
    //tu tao createAt va updateAt
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);