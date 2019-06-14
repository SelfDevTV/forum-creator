const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Forum = require('../model/Forum');
const SubForum = require('../model/SubForum');

dotenv.config();

const db = mongoose.connect(process.env.DB_CONNECT, async () => {
  mongoose.connection.db.dropDatabase();
  const forum = new Forum({
    title: 'Hardware',
    subTitle: 'All about hardware'
  });

  const savedForum = await forum.save();

  const subForum = new SubForum({
    title: 'Arbeitsspeicher',
    subTitle: 'Taktrate, Timings, Bauform und Hersteller',
    forum: savedForum.id
  });

  const savedSubForum = await subForum.save();

  const search = await Forum.findById(savedForum.id);
  search.subForums.push(subForum.id);
  await search.save();
  console.log(search);

  mongoose.disconnect();
});

// seeds the database
