const express = require('express')
const router = express.Router();
const BlogController = require('../controller/BlogController')

router.get('/getblogs', BlogController.get_blog)
router.post('/createblog', BlogController.create_blog)
router.delete('/deleteblog/:id', BlogController.delete_blog)

module.exports = router