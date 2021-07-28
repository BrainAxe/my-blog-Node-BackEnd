const Post = require('../model/post.model');

function createPost(input) {
  return Post.create(input);
}

function findPost(query, options) {
  return Post.findOne(query, {}, options);
}

function findAllPost() {
  return Post.find().populate('author', 'name');
}

function findAndUpdate(query, update, options) {
  return Post.findOneAndUpdate(query, update, options);
}

function deletePost(query) {
  return Post.deleteOne(query);
}

module.exports = {
  createPost,
  findPost,
  findAllPost,
  findAndUpdate,
  deletePost
};
