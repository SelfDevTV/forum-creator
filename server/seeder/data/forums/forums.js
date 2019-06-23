const { getObjectId, getObjectIds } = require('../../helpers/index');

const forums = {
  _id: getObjectId('forumA'),
  title: 'My custom forum',
  subForums: getObjectIds(['subA', 'subB', 'subC', 'subD'])
};

module.exports = forums;
