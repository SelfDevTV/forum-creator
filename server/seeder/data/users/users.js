const { getObjectId, getObjectIds } = require('../../helpers/index');

const users = [
  {
    id: getObjectId('userA'),
    name: 'Dominik Huber',
    email: 'dhuber666@gmail.com',
    password: 'asdfasdfasdf',
    facebookId: 'dhuber666',
    posts: getObjectIds(['postA', 'postB']),
    replies: getObjectIds(['repC, repD'])
  },
  {
    id: getObjectId('userB'),
    name: 'Magda Puchner',
    email: 'magda@gmail.com',
    password: 'ffff',
    facebookId: 'magi.fb',
    posts: getObjectIds(['postC']),
    replies: getObjectIds(['repA'])
  }
];

module.exports = users;
