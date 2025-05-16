const mongoose = require('mongoose');

const Schema = mongoose.Schema

//tạo bảng phác thảo để lấy api
const Planet = new Schema({
    vn_name: String,
    eng_name: String,
    image: String,
    description: String,
    glb: String,
    title: String,
    detailDescription: String,
    modelSize: Number
    // size = modelSize*0.1
})

module.exports = mongoose.model('Planet', Planet, "planets")