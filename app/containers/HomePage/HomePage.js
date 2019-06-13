/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import './style.scss';

const HomePage = ({}) => {
  useEffect(() => {
    console.log('hiho');
  });

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <h2>Hello</h2>
    </article>
  );
};

export default HomePage;
