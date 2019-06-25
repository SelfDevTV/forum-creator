import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import PostsGroup from 'components/PostsGroup';
import PostItem from 'components/PostItem';

const SubforumPage = ({
  match, loading, posts, loadSub, sub, error
}) => {
  useEffect(() => {
    const { id: subId } = match.params;
    loadSub(subId);
  }, []);

  const renderPosts = () => posts.map((post) => <PostItem post={post} key={post.id} />);

  if (loading) return <CircularProgress />;

  return <PostsGroup sub={sub}>{renderPosts()}</PostsGroup>;
};

export default SubforumPage;
