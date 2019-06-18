import { fromJS } from 'immutable';
import {
  FETCHED_POSTS_SUCCESS,
  FETCHED_POSTS_ERROR,
  FETCH_POSTS
} from './constants';

const initialState = fromJS({
  posts: false,
  loading: false,
  error: false
});

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return state.set('loading', true).set('error: false');
    case FETCHED_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error: false')
        .set('posts', action.posts);

    case FETCHED_POSTS_ERROR:
      return state.set('loading', false).set('error:', action.error);
    default:
      return state;
  }
};

export default postsReducer;
