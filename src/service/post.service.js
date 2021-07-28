const Post = require('../model/post.model');

function createPost(input) {
  return Post.create(input);
}

module.exports = { createPost };
