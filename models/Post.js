const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    street: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    }
});

module.exports = {
    Post: mongoose.model('posts', PostSchema),
};