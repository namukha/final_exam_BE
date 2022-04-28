// const express = require('express');
const Blog = require('../models/Model')

const create_blog = (req, res, next) => {
    const data = req.body
    Blog.create(data, function (err, data) {
        if (err)
        res.json({
            success: false,
            data: err
        })
        else res.json({
            success: true,
            data: data
        })
    })
}

const get_blog = (req, res, next) => {
    Blog.find({}, function (err, data) {
        if (err)
        res.json({
            success: false,
            data: err
        })
        else res.json({
            success: true,
            data: data
        })
    })
}

const delete_blog = (req, res, next) => {
    const id = req.params.id
    Blog.findOneAndDelete({_id: id}, function (err, data) {
        if (err)
        res.json({
            success: false,
            data: err
        })
        else res.json({
            success: true,
            data: data
        })
    })
}

module.exports = {
    create_blog,
    get_blog,
    delete_blog
}