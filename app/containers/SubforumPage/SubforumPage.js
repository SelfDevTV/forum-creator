// TODO: When user clicks on subforum he lands here with the id of the sub in the link
// Fetch the data for this sub and all it's posts.

import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import PostsGroup from 'components/PostsGroup';

const SubforumPage = ({
  match, loading, posts, loadPosts
}) => {
  useEffect(() => {
    const { id: subId } = match.params;

    console.log('props: ', match);
    loadPosts(subId);
  }, []);

  // TODO: Fetch details of this sub

  console.log('loading runs??', loading);

  if (loading) return <CircularProgress />;

  return <PostsGroup posts={posts || []} />;
};

// const SubforumPage = (props) => {
//   useEffect(() => {
//     console.log(props.match);
//   }, []);
//   console.log(props);

//   return <h3>Hi</h3>;
// };

export default SubforumPage;
