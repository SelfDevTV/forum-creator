/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  makeStyles,
  Typography
} from '@material-ui/core';

import { Helmet } from 'react-helmet';

import './style.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10
  },
  divider: {
    backgroundColor: theme.palette.primary
  }
}));

const HomePage = ({ user }) => {
  useEffect(() => {
    console.log('hello from home, user: ', user);
  });

  const classes = useStyles();

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Paper className={classes.root}>
        <List>
          <ListItem>
            <Typography variant="h5" color="secondary">
              Hardware
            </Typography>
          </ListItem>
          <Divider component="div" className={classes.divider} />

          <ListItem>
            <ListItemText
              primary="Arbeitsspeicher"
              secondary="Taktrate, Timings, Bauform und Hersteller der Speichermodule (RAM)"
            />
          </ListItem>
          <Divider variant="middle" light />
          <ListItem>
            <ListItemText
              primary="Arbeitsspeicher"
              secondary="Taktrate, Timings, Bauform und Hersteller der Speichermodule (RAM)"
            />
          </ListItem>

          <Divider variant="middle" light />
          <ListItem>
            <ListItemText
              primary="Arbeitsspeicher"
              secondary="Taktrate, Timings, Bauform und Hersteller der Speichermodule (RAM)"
            />
          </ListItem>
        </List>
      </Paper>
      <Paper className={classes.root}>
        <List>
          <ListItem>
            <Typography variant="h5" color="secondary">
              Software
            </Typography>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemText
              primary="Arbeitsspeicher"
              secondary="Taktrate, Timings, Bauform und Hersteller der Speichermodule (RAM)"
            />
          </ListItem>

          <Divider />
          <ListItem>
            <ListItemText
              primary="Arbeitsspeicher"
              secondary="Taktrate, Timings, Bauform und Hersteller der Speichermodule (RAM)"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Arbeitsspeicher"
              secondary="Taktrate, Timings, Bauform und Hersteller der Speichermodule (RAM)"
            />
          </ListItem>
        </List>
      </Paper>
    </article>
  );
};

export default HomePage;
