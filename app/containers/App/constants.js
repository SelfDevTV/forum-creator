/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_FORUMS = 'boilerplate/App/LOAD_FORUMS';
export const LOAD_FORUMS_SUCCESS = 'boilerplate/App/LOAD_FORUMS_SUCCESS';
export const LOAD_FORUMS_ERROR = 'boilerplate/App/LOAD_FORUMS_ERROR';
export const DEFAULT_LOCALE = 'en';
export const LOAD_USER = 'boilerplate/App/LOAD_USER';
export const LOAD_USER_SUCCESS = 'boilerplate/App/LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = 'boilerplate/App/LOAD_USER_ERROR';
export const LOGOUT_USER = 'boilerplate/App/LOGOUT_USER';
export const LOGGED_OUT_USER = 'boilerplate/App/LOGGED_OUT_USER';
export const LOGIN_USER = 'boilerplate/App/LOGIN_USER';
