const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const PostSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10)
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, default: true },
    content: { type: String, default: true },
    thumbnail: { type: String, default: true }
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
