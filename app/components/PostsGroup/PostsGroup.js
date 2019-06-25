import React from 'react';
import styled from 'styled-components';
import NotfoundPage from 'containers/NotFoundPage';

const Container = styled.div``;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1em;
  margin-top: 1em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 2px;
`;

const SubforumTitle = styled.h1`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  color: black;
`;

const PostsGroup = ({ sub, error, children }) => {
  if (error) return <NotfoundPage />;

  return (
    <Container>
      <SubforumTitle>{sub.title}</SubforumTitle>
      <PostsContainer>{children}</PostsContainer>
    </Container>
  );
};
export default PostsGroup;
