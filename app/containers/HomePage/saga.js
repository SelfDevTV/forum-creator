/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_FORUMS } from 'containers/App/constants';
import { forumsLoaded, forumsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getForums() {
  // Select username from store

  const requestURL = '/api/forums/all';

  try {
    // Call our request helper (see 'utils/request')
    const forums = yield call(request, requestURL);

    yield put(forumsLoaded(forums));
  } catch (err) {
    yield put(forumsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_FORUMS, getForums);
}
