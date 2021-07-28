const { get } = require('lodash');
const { createPost, findPost } = require('../service/post.service');

async function createPostHandler(req, res) {
  const userId = get(req, 'user._id');
  const { body } = req;

  const post = await createPost({ ...body, author: userId });
  return res.send(post);
}

async function getPostHandler(req, res) {
  const postId = get(req, 'params.postId');
  const post = await findPost({ postId });

  if (!post) {
    return res.sendStatus(404);
  }
  return res.send(post);
}

module.exports = { createPostHandler, getPostHandler };
