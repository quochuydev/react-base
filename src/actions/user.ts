import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { AppState } from '../store';
import { USER_GET, USER_EDIT, USER_CREATE } from '../common/constants';
import { UserService } from '../services';

export default {
  get: ({ id }: { id: string }): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
    const result = await UserService.getById(id);
    const user = result.user;
    const payload = { success: true, user };
    dispatch({ type: USER_GET, payload });
    return result;
  },

  create: (data: TODO): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
    const result = await UserService.create(data);
    dispatch({ type: USER_CREATE, payload: { user: result.user } });
    return result;
  },

  update: ({ id }: { id: string }, data: TODO): ThunkAction<void, AppState, null, Action<string>> => async (
    dispatch
  ) => {
    const result = await UserService.update({ id }, data);
    dispatch({ type: USER_EDIT, payload: { user: result.user } });
    return result;
  },
};
