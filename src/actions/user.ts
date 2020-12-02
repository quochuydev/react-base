import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { AppState } from '../store';
import { USER_GET } from '../common/constants';

const get = (
  query?: any
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  console.log(query)
  let payload = { success: true, user: { first_name: '' } };
  dispatch({ type: USER_GET, payload });
};

const ACTIONS = { get };

export default ACTIONS;
