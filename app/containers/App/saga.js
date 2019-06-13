import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { userLoaded, userLoadedError, userLoggedOut } from './actions';
import { LOAD_USER, LOGOUT_USER } from './constants';

export function* getUser() {
  const requestURL = '/api/user/me';

  try {
    const user = yield call(request, requestURL, {
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    yield put(userLoaded(user));
  } catch (err) {
    yield put(userLoadedError(err));
  }
}

export function* logUserOut() {
  const requestURL = '/api/auth/logout';

  try {
    yield call(request, requestURL);
    yield put(userLoggedOut());
  } catch (err) {
    // TODO: Add error handling
    alert(err);
  }
}

export default function* auth() {
  yield takeLatest(LOAD_USER, getUser);
  yield takeLatest(LOGOUT_USER, logUserOut);
}
