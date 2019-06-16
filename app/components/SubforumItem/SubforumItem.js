import React, { Fragment } from 'react';
import {
  ListItem,
  Divider,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const SubforumItem = ({
  title,
  subTitle,
  shouldRenderDivider,
  lastPost,
  lastPostUser,
  time,
  subId
}) => (
  <Fragment>
    <ListItem component={Link} to={`/sub/${subId}`}>
      <ListItemText primary={title} secondary={subTitle} />

      <ListItemSecondaryAction>
        <ListItemText
          primary={lastPost}
          secondary={`${lastPostUser} - ${time}`}
        />
      </ListItemSecondaryAction>
    </ListItem>

    {shouldRenderDivider && <Divider variant="middle" light />}
  </Fragment>
);

export default SubforumItem;
