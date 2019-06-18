import {
  FETCH_POSTS,
  FETCHED_POSTS_ERROR,
  FETCHED_POSTS_SUCCESS
} from './constants';

export const startFetchingPosts = (subId) => ({
  type: FETCH_POSTS,
  subId
});

export const successFetchingPosts = (posts) => ({
  type: FETCHED_POSTS_SUCCESS,
  posts
});

export const errorFetchingPosts = (error) => ({
  type: FETCHED_POSTS_ERROR,
  error
});
