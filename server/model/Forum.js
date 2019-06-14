const mongoose = require('mongoose');

mongoose.set('debug', true);

const forumSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  subForums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subforum' }]
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
