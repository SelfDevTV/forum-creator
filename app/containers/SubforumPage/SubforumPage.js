import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import PostsGroup from 'components/PostsGroup';

const SubforumPage = ({
  match, loading, posts, loadSub, sub, error
}) => {
  useEffect(() => {
    const { id: subId } = match.params;
    loadSub(subId);
  }, []);

  console.log('posts', posts);

  if (loading) return <CircularProgress />;

  return <PostsGroup posts={posts || []} sub={sub || false} error={error} />;
};

export default SubforumPage;
