const { getObjectId } = require('../../helpers/index');

const replies = [
  {
    _id: getObjectId('repA'),
    text: 'repA',
    post: 'post A',
    user: getObjectId('userB')
  },
  {
    _id: getObjectId('repB'),
    text: 'repB',
    post: 'post B'
  },
  {
    _id: getObjectId('repC'),
    text: 'repC',
    post: 'post C',
    user: getObjectId('userA')
  },
  {
    _id: getObjectId('repD'),
    text: 'repD',
    post: 'post D',
    user: getObjectId('userA')
  }
];

module.exports = replies;
