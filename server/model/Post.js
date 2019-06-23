const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  subForum: { type: mongoose.Schema.Types.ObjectId, ref: 'Subforum' },
  body: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
  likes: Number,
  date: {
    type: Date,
    default: Date.now()
  }
});

postSchema.virtual('id').get(function transformToId() {
  return this._id; // eslint-disable-line
});

// Ensure virtual fields are serialised.
postSchema.set('toJSON', {
  virtuals: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
