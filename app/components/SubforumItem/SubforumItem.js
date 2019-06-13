import React, { Fragment } from 'react';
import { ListItem, Divider, ListItemText } from '@material-ui/core';

const SubforumItem = ({ title, subTitle, shouldRenderDivider }) => (
  <Fragment>
    <ListItem>
      <ListItemText primary={title} secondary={subTitle} />
    </ListItem>
    {shouldRenderDivider && <Divider variant="middle" light />}
  </Fragment>
);

export default SubforumItem;
