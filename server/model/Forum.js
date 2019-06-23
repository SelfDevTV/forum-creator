const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
  title: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  subForums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subforum' }],
  date: {
    type: Date,
    default: Date.now()
  }
});

forumSchema.virtual('id').get(function transformToId() {
  return this._id; // eslint-disable-line
});

// Ensure virtual fields are serialised.
forumSchema.set('toJSON', {
  virtuals: true
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
