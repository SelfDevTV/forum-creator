const { getObjectId, getObjectIds } = require('../../helpers/index');

const subForums = [
  {
    _id: getObjectId('subA'),
    title: 'subA',
    subTitle: 'Sub Forum A',
    posts: getObjectIds(['postA', 'postB']),
    lastPost: getObjectId('postA'),
    forum: getObjectId('forumA')
  },
  {
    _id: getObjectId('subB'),
    title: 'subB',
    subTitle: 'Sub Forum B',
    posts: getObjectIds(['postC']),
    lastPost: getObjectId('postC'),
    forum: getObjectId('forumA')
  },
  {
    _id: getObjectId('subC'),
    title: 'subC',
    subTitle: 'Sub Forum C',
    forum: getObjectId('forumA')
  },
  {
    _id: getObjectId('subD'),
    title: 'subD',
    subTitle: 'Sub Forum D',
    forum: getObjectId('forumA')
  }
];

module.exports = subForums;
