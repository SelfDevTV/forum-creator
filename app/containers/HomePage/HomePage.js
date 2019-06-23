/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import SubforumGroup from 'components/SubforumGroup';
import SubforumItem from 'components/SubforumItem';

import { Helmet } from 'react-helmet';

const HomePage = ({ user, forums, loadForums }) => {
  useEffect(() => {
    loadForums();
  }, []);

  const renderForums = () => forums.map((forum) => (
    <SubforumGroup title={forum.title} key={forum.id}>
      {forum.subForums.map((sub, id) => (
        <SubforumItem
          title={sub.title}
          subTitle={sub.subTitle}
          lastPost={sub.posts.length > 0 && sub.lastPost.title}
          lastPostUser={sub.posts.length > 0 && sub.lastPost.user.name}
          time={sub.posts.length > 0 && moment(sub.lastPost.date).fromNow()}
          subId={sub.id}
          key={sub.id}
          isLastItem={id !== forum.subForums.length - 1}
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
