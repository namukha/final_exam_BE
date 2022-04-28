const mongoose = require('mongoose')
const { Schema } = mongoose;

const blogSchema = new Schema ({
    blog_header: {
        type: String,
        required: [true, "task"]
    },
    blog_text: {
        type: String,
        required: [true, "task status"]
    },
    created_date: {
        type: Date,
        required: [true, "created date"]
    }
})

const Blog = mongoose.model('Blogs', blogSchema);
module.exports = Blog;