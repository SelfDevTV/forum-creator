import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import PostsGroup from 'components/PostsGroup';

const SubforumPage = ({
  match, loading, posts, loadPosts
}) => {
  useEffect(() => {
    const { id: subId } = match.params;
    loadPosts(subId);
  }, []);

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
