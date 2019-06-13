import React from 'react';
import {
  List,
  ListItem,
  Divider,
  Paper,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10
  },
  divider: {
    backgroundColor: theme.palette.primary
  }
}));

const SubforumGroup = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <List>
        <ListItem>
          <Typography variant="h5" color="secondary">
            {title}
          </Typography>
        </ListItem>
        <Divider />
        {children}
      </List>
    </Paper>
  );
};

export default SubforumGroup;
