/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './style.scss';

const HomePage = ({
  loadForums,
  forums,
  loading,
  error,
  onSubmitForm,
  username,
  onChangeUsername
}) => {
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
      <div className="home-page">
        <section className="centered">
          <h2>Start your next react project in seconds</h2>
          <p>
            A minimal <i>React-Redux</i> boilerplate with all the best practices
          </p>
        </section>
        <section>
          <h2>Try me!</h2>
          <form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              Show Github repositories by
              <span className="at-prefix">@</span>
              <input
                id="username"
                type="text"
                placeholder="flexdinesh"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </form>
        </section>
      </div>
    </article>
  );
};
HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  forums: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  loadForums: PropTypes.func
};

export default HomePage;
