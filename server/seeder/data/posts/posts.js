const { getObjectId, getObjectIds } = require('../../helpers/index');

const posts = [
  {
    _id: getObjectId('postA'),
    title: 'This is my very first post and I love it.',
    body: 'post A',
    user: getObjectId('userA'),
    subForum: getObjectId('subA'),
    replies: getObjectIds(['repA, repB']),
    likes: 10
  },
  {
    _id: getObjectId('postB'),
    title: 'This is my second post, please help me.',
    body: 'post B',
    user: getObjectId('userA'),
    subForum: getObjectId('subA'),
    replies: getObjectIds(['repC, repD']),
    likes: 10
  },
  {
    _id: getObjectId('postC'),
    title: 'Third post but I still love this post',
    body: 'post C',
    user: getObjectId('userB'),
    subForum: getObjectId('subB'),
    likes: 10
  }
];

module.exports = posts;
