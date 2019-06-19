/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectSub = (state) => state.get('sub');

const makeSelectPosts = () => createSelector(
  selectSub,
  (subState) => subState.get('sub').posts
);

const makeSelectSub = () => createSelector(
  selectSub,
  (subState) => subState.get('sub')
);

const makeSelectLoading = () => createSelector(
  selectSub,
  (subState) => subState.get('loading')
);

const makeSelectError = () => createSelector(
  selectSub,
  (subState) => subState.get('error')
);

export {
  selectSub,
  makeSelectPosts,
  makeSelectLoading,
  makeSelectError,
  makeSelectSub
};
