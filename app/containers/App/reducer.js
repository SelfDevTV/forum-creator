/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_FORUMS,
  LOAD_FORUMS_ERROR,
  LOAD_FORUMS_SUCCESS
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  forumData: {
    forums: false
  }
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FORUMS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['forumData', 'forums'], false);
    case LOAD_FORUMS_SUCCESS:
      return state
        .setIn(['forumData', 'forums'], action.forums)
        .set('loading', false);

    case LOAD_FORUMS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
