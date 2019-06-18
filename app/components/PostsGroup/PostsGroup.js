import React from 'react';

const PostsGroup = ({ posts }) => {
  // TODO: Make a Group Container, maybe even just a styled div with Styled Components.
  console.log(null);
  return (
    <div>
      <h2>Postgroup. Posts: </h2>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </div>
  );
};

export default PostsGroup;
