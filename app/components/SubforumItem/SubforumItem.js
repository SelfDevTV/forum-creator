import React, { Fragment } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: ${(props) => (props.islastitem ? '0.8px solid rgba(0, 0, 0, 0.12)' : 'none')};
  list-style: none;
  text-decoration: none;
  font-family: 'Roboto';
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  justify-content: center;
  margin: 0;
`;

const Title = styled.h2`
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: 18px;
  color: #2196f3;
`;

const Subtitle = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: #191919;
`;

const LastpostMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const PostMetaPrimary = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #2196f3;
  opacity: 0.7;
`;

const PostMetaSecondary = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: #191919;
  opacity: 0.5;
`;

const SubforumItem = ({
  title,
  subTitle,
  isLastItem,
  lastPost,
  lastPostUser,
  time,
  subId
}) => (
  <ItemContainer as={Link} to={`/sub/${subId}`} islastitem={isLastItem}>
    <TitleContainer>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
    </TitleContainer>
    <LastpostMetaContainer>
      <PostMetaPrimary>{lastPost}</PostMetaPrimary>
      <PostMetaSecondary>
        {lastPost && `- ${lastPostUser},  ${time}`}
      </PostMetaSecondary>
    </LastpostMetaContainer>
  </ItemContainer>
);

export default SubforumItem;

{
  /* <ListItem component={Link} to={`/sub/${subId}`}>
      <ListItemText primary={title} secondary={subTitle} />

      <ListItemSecondaryAction>
        <ListItemText
          style={{ textAlign: 'center' }}
          primary={lastPost || 'No Posts Yet'}
          secondary={lastPost && `${lastPostUser} - ${time}`}
        />
      </ListItemSecondaryAction>
    </ListItem>

    {shouldRenderDivider && <Divider variant="middle" light />} */
}
