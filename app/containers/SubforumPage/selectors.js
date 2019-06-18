/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectPosts = (state) => state.get('posts');

const makeSelectPosts = () => createSelector(
  selectPosts,
  (postState) => postState.get('posts')
);

const makeSelectLoading = () => createSelector(
  selectPosts,
  (postState) => postState.get('loading')
);

const makeSelectError = () => createSelector(
  selectPosts,
  (postState) => postState.get('error')
);

export {
  selectPosts, makeSelectPosts, makeSelectLoading, makeSelectError
};
