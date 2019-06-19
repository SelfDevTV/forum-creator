import { fromJS } from 'immutable';
import { FETCH_SUB, FETCHED_SUB_SUCCESS, FETCHED_SUB_ERROR } from './constants';

const initialState = fromJS({
  sub: false,
  loading: true,
  error: false
});

const subReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUB:
      return state.set('loading', true).set('error', false);
    case FETCHED_SUB_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('sub', action.sub);

    case FETCHED_SUB_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
};

export default subReducer;
