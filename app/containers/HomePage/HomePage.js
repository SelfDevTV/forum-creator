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
import moment from 'moment';

import SubforumGroup from 'components/SubforumGroup';
import SubforumItem from 'components/SubforumItem';

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

const HomePage = ({ user, forums, loadForums }) => {
  useEffect(() => {
    loadForums();
    console.log('hello from home, user: ', user);
    console.log('here are the forums: ');
  }, []);

  const classes = useStyles();

  const renderForums = () => forums.map((forum) => (
    <SubforumGroup title={forum.title} key={forum._id}>
      {forum.subForums.map((sub) => (
        <SubforumItem
          title={sub.title}
          subTitle={sub.subTitle}
          lastPost={sub.lastPost.title}
          lastPostUser={sub.lastPost.user.name}
          time={moment(sub.lastPost.date).fromNow()}
          subId={sub._id}
          key={sub._id}
        />
      ))}
    </SubforumGroup>
  ));

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      {forums && renderForums()}
    </article>
  );
};

export default HomePage;
