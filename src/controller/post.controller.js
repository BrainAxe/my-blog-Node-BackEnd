const { get } = require('lodash');
const {
  createPost,
  findPost,
  findAndUpdate,
  deletePost
} = require('../service/post.service');

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

async function updatePostHandler(req, res) {
  const userId = get(req, 'user._id');
  const postId = get(req, 'params.postId');
  const update = req.body;

  const post = await findPost({ postId });

  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.user) !== userId) {
    return res.sendStatus(401);
  }

  const updatedPost = await findAndUpdate({ postId }, update, { new: true });

  return res.send(updatedPost);
}

async function deletePostHandler(req, res) {
  const userId = get(req, 'user._id');
  const postId = get(req, 'params.postId');

  const post = await findPost({ postId });

  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.user) !== userId) {
    return res.sendStatus(401);
  }

  await deletePost({ postId });

  return res.sendStatus(200);
}

module.exports = {
  createPostHandler,
  getPostHandler,
  updatePostHandler,
  deletePostHandler
};
