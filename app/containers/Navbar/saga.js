import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_USER } from 'containers/App/constants';
import { userLoaded } from 'containers/App/actions';

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
    // TODO: Add error
  }
}

export default function* auth() {
  yield takeLatest(LOAD_USER, getUser);
}
