const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Forum = require('../model/Forum');
const SubForum = require('../model/SubForum');
const Post = require('../model/Post');
const User = require('../model/User');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, async () => {
  mongoose.connection.db.dropDatabase();

  try {
    const forum = new Forum({
      title: 'Arbeitsspeicher, Mainboards und CPUs'
    });

    const savedForum = await forum.save();

    const subForum = new SubForum({
      title: 'Arbeitsspeicher',
      subTitle: 'Taktrate, Timings, Bauform und Hersteller',
      forum: savedForum.id
    });

    const savedSubforum = await subForum.save();

    const search = await Forum.findById(savedForum.id);
    search.subForums.push(savedSubforum.id);
    await search.save();

    const user = new User({
      name: 'Dominik Huber',
      email: 'dhuber666@gmail.com',
      password: 'atiradeon9200se'
    });

    const savedUser = await user.save();

    const post = new Post({
      title: 'Bitte um Hilfe bei meinem PC',
      subForum: savedSubforum.id,
      body: 'lalala mein text',
      user: savedUser.id
    });

    const savedPost = await post.save();

    subForum.posts.push(savedPost.id);
    subForum.lastPost = savedPost.id;

    await subForum.save();

    user.posts.push(savedPost.id);

    await user.save();
  } catch (err) {
    console.log(err);
  }

  mongoose.disconnect();
});

// seeds the database
