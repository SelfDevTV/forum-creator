import React from 'react';

import styled from 'styled-components';

const ForumContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ForumTitle = styled.h1`
  padding: 8px 16px;
  font-size: 22px;
  font-weight: 800;
  font-family: 'Roboto';
  margin: 0;
  color: rebeccapurple;
  text-transform: uppercase;
  border-bottom: 2px solid rebeccapurple;
`;

const SubforumGroup = ({ title, children }) => (
  <ForumContainer>
    <ForumTitle>{title}</ForumTitle>
    {children}
  </ForumContainer>
);

export default SubforumGroup;

/* <Paper className={classes.root} square>
      <List>
        <ListItem style={{ backgoundColor: 'orange' }}>
          <Typography variant="h6">{title}</Typography>
        </ListItem>
        <Divider />
        {children}
      </List>
    </Paper> */
