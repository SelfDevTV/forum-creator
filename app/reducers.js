/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import history from 'utils/history';
import { connectRouter } from 'connected-react-router';

import globalReducer from 'containers/App/reducer';

/**
 * Merges the main reducer with router state and dynamically injected reducers
 */

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    router: connectRouter(history),
    ...injectedReducers
  });

  return rootReducer;
}
