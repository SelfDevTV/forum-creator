import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin-top: 1em;
`;

const SubforumTitle = styled.h1`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  color: black;
`;

const PostsGroup = ({ sub, children }) => (
  <Container>
    <SubforumTitle>{sub.title}</SubforumTitle>
    <PostsContainer>{children}</PostsContainer>
  </Container>
);
export default PostsGroup;
