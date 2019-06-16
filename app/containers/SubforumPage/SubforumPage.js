// TODO: When user clicks on subforum he lands here with the id of the sub in the link
// Fetch the data for this sub and all it's posts.

import React from 'react';

const SubforumPage = (props) => {
  const { id: subId } = props.match.params;

  // TODO: Fetch details of this sub
  console.log(subId);
  return <h1>Hi</h1>;
};

export default SubforumPage;
