/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_POSTS } from './constants';
import { successFetchingPosts, errorFetchingPosts } from './actions';

/**
 * Github repos request/response handler
 */
export function* getPosts(action) {
  // Select username from store

  const requestURL = `/api/posts/bySubId?subId=${action.subId}`;

  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);

    yield put(successFetchingPosts(posts));
  } catch (err) {
    yield put(errorFetchingPosts(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* postData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(FETCH_POSTS, getPosts);
}
