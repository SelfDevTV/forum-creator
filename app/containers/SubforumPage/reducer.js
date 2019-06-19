import { FETCH_SUB, FETCHED_SUB_SUCCESS, FETCHED_SUB_ERROR } from './constants';

const initialState = {
  sub: false,
  loading: true,
  error: false
};

const subReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUB:
      return {
        ...state,
        loading: true,
        error: false
      };

    case FETCHED_SUB_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        sub: action.sub
      };

    case FETCHED_SUB_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default subReducer;
