import React from 'react';
import styled from 'styled-components';
import NotfoundPage from 'containers/NotfoundPage';

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

const SubforumTitle = styled.li`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  color: white;
`;

const PostsGroup = ({ posts, sub, error }) => {
  console.log(error);
  if (error) return <NotfoundPage />;

  return (
    <Container>
      <PostsContainer>
        <h2>Postgroup props: </h2>
        {posts.map((post) => (
          <>
            <SubforumTitle>{post.title}</SubforumTitle>
            <li>{post.body}</li>
            <li>{sub.title}</li>
            <li>{sub.subTitle}</li>
          </>
        ))}
      </PostsContainer>
    </Container>
  );
};
export default PostsGroup;
