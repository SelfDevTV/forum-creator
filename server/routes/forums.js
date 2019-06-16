const router = require('express').Router();
const verifyAdmin = require('../middlewares/verifyAdmin');
const Forum = require('../model/Forum');
const SubForum = require('../model/SubForum');

router.post('/new', verifyAdmin, async (req, res) => {
  const forum = new Forum({
    title: req.body.title,
    subTitle: req.body.subTitle
  });

  try {
    await forum.save();
    res.send(forum);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/newSub', verifyAdmin, async (req, res) => {
  const subForum = new SubForum({
    title: req.body.title,
    subTitle: req.body.subTitle,
    forum: req.body.forum
  });

  try {
    await subForum.save();
    const forum = await Forum.findById(req.body.forum);

    forum.subForums.push(subForum.id);
    await forum.save();

    res.send(subForum);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/all', async (req, res) => {
  // Populating all field we need in the frontend
  // We need: All the forums, with all subForums
  // and for each subForum we need it's posts and last poast

  try {
    const all = await Forum.find({}).populate({
      path: 'subForums',
      populate: { path: 'lastPost', populate: { path: 'user' } }
    });

    return res.json(all);
  } catch (err) {
    return res.json(err);
  }
});

// Gets the forum by id and all its subs
router.get('/:id', async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id).populate('subForums');
    res.send(forum);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
