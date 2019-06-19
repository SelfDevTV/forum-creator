import { FETCHED_SUB_ERROR, FETCHED_SUB_SUCCESS, FETCH_SUB } from './constants';

export const startFetchingSub = (subId) => ({
  type: FETCH_SUB,
  subId
});

export const successFetchingSub = (sub) => ({
  type: FETCHED_SUB_SUCCESS,
  sub
});

export const errorFetchingSub = (error) => ({
  type: FETCHED_SUB_ERROR,
  error
});
