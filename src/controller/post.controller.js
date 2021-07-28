const { get } = require('lodash');
const { createPost } = require('../service/post.service');

async function createPostHandler(req, res) {
  const userId = get(req, 'user._id');
  const { body } = req;

  const post = await createPost({ ...body, author: userId });
  return res.send(post);
}

module.exports = { createPostHandler };
