import React from 'react';
import styled from 'styled-components';

// TODO: Style this component

const PostItem = ({ post }) => (
  <div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
);

export default PostItem;
