/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectSub = (state) => state.sub;

const makeSelectPosts = () => createSelector(
  selectSub,
  (subState) => subState.sub.posts
);

const makeSelectSub = () => createSelector(
  selectSub,
  (subState) => subState.sub
);

const makeSelectLoading = () => createSelector(
  selectSub,
  (subState) => subState.loading
);

const makeSelectError = () => createSelector(
  selectSub,
  (subState) => subState.error
);

export {
  selectSub,
  makeSelectPosts,
  makeSelectLoading,
  makeSelectError,
  makeSelectSub
};
