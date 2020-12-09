import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { AppState } from '../store';
import { SIGN_IN, LOGGED_USER } from '../common/constants';

const signIn = (apiAction?: TODO): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  console.log(apiAction);
  const payload = { success: true, token: 'token' };
  dispatch({ type: SIGN_IN, payload });
};

const usingUser = (data?: TODO): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  const payload = { user: { id: data.id, email: 'user@gmail.com' } };
  dispatch({ type: LOGGED_USER, payload });
};

const ACTIONS = {
  signIn,
  usingUser,
};

export default ACTIONS;
