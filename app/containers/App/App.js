/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import SubforumPage from 'containers/SubforumPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Navbar from 'containers/Navbar';
import { Container } from '@material-ui/core';
import './style.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

// TODO: Delete unnecessary Containers and components

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Container>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sub/:id" component={SubforumPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>

      {/* <Footer /> */}
    </Container>
  </MuiThemeProvider>
);

export default App;
