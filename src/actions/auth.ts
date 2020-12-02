import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { AppState } from '../store';
import { SIGN_IN } from '../common/constants';

export const signIn = (
  apiAction?: any
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  let payload;

  console.log(apiAction);
  const { username, password } = apiAction;
  payload = { success: true, token: 'token' };

  dispatch({ type: SIGN_IN, payload });
};
