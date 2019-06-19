const router = require('express').Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const Post = require('../model/Post');
const Reply = require('../model/Reply');
const User = require('../model/User');

// This is a protected route with the "isAuthenticated" middleware

router.post('/new', isAuthenticated, async (req, res) => {
  const reply = new Reply({
    text: req.body.text,
    user: req.userId,
    post: req.body.postId
  });
  // Find the post and user who posted it
  // Save the new Reply into the Users replies array
  // also save the reply in the corresponding post
  try {
    await reply.save();
    const user = await User.findById(req.userId);
    user.replies.push(reply.id);
    await user.save();

    const post = await Post.findById(req.body.postId);
    post.replies.push(post.id);
    await post.save();

    res.send(reply);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/myreplies', isAuthenticated, async (req, res) => {
  try {
    const replies = await Reply.find({ user: req.userId });
    res.send(replies);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
