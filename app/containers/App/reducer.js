import {
  LOAD_FORUMS,
  LOAD_FORUMS_ERROR,
  LOAD_FORUMS_SUCCESS,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  LOGOUT_USER,
  LOGGED_OUT_USER,
  LOGIN_USER
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  forumData: {
    forums: false
  }
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FORUMS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        forumData: {
          forums: false
        }
      };
      return newState;
    }
    case LOAD_FORUMS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        error: false,
        forumData: {
          forums: action.forums
        }
      };

      return newState;
    }

    case LOAD_FORUMS_ERROR:
      return { ...state, loading: false, error: action.error };
    case LOAD_USER:
      return {
        ...state,
        loading: true,
        error: false,
        currentUser: false
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.user,
        error: false
      };

    case LOAD_USER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: true
      };

    case LOGGED_OUT_USER:
      return {
        ...state,
        currentUser: false,
        loading: false,
        error: false
      };

    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: false
      };

    default:
      return state;
  }
}

export default appReducer;
