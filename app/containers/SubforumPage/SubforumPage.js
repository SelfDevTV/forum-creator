import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import PostsGroup from 'components/PostsGroup';
import PostItem from 'components/PostItem';
import NotfoundPage from 'containers/NotFoundPage';

const SubforumPage = ({
  match, loading, posts, loadSub, sub, error
}) => {
  useEffect(() => {
    const { id: subId } = match.params;
    loadSub(subId);
  }, []);

  const renderPosts = () => posts.map((post) => <PostItem post={post} key={post.id} />);

  if (error) return <NotfoundPage />;

  if (loading) return <CircularProgress />;

  return <PostsGroup sub={sub}>{renderPosts()}</PostsGroup>;
};

export default SubforumPage;
