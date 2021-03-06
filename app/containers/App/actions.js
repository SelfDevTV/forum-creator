/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_FORUMS,
  LOAD_FORUMS_ERROR,
  LOAD_FORUMS_SUCCESS,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  LOGOUT_USER,
  LOGGED_OUT_USER,
  LOGIN_USER
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadForums() {
  return {
    type: LOAD_FORUMS
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function forumsLoaded(forums) {
  return {
    type: LOAD_FORUMS_SUCCESS,
    forums
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function forumsLoadingError(error) {
  return {
    type: LOAD_FORUMS_ERROR,
    error
  };
}

export const loadUser = () => ({
  type: LOAD_USER
});

export const userLoaded = (user) => ({
  type: LOAD_USER_SUCCESS,
  user
});

export const userLoadedError = (error) => ({
  type: LOAD_USER_ERROR,
  error
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const userLoggedOut = () => ({
  type: LOGGED_OUT_USER
});

export const loginUser = () => ({
  type: LOGIN_USER
});
