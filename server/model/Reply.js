const mongoose = require('mongoose');

// A post reply always belongs to a post and to a user
const replySchema = new mongoose.Schema({
  text: String,
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: {
    type: Date,
    default: Date.now()
  }
});

replySchema.virtual('id').get(function transformToId() {
  return this._id; // eslint-disable-line
});

// Ensure virtual fields are serialised.
replySchema.set('toJSON', {
  virtuals: true
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
