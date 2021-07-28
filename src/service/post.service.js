const Post = require('../model/post.model');

function createPost(input) {
  return Post.create(input);
}

function findPost(query, options) {
  return Post.findOne(query, {}, options);
}

function findAndUpdate(query, update, options) {
  return Post.findOneAndUpdate(query, update, options);
}

module.exports = { createPost, findPost, findAndUpdate };
