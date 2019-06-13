import { SIGN_UP } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function signUp() {
  return {
    type: SIGN_UP
  };
}
