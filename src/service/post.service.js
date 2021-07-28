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

function deletePost(query) {
  return Post.deleteOne(query);
}

module.exports = { createPost, findPost, findAndUpdate, deletePost };
