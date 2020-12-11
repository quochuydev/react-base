import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { AppState } from '../store';
import { USER_LIST, USER_GET, USER_EDIT, USER_CREATE } from '../common/constants';
import { UserService } from '../services';

export default {
  list: (query: TODO): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
    console.log(query);
    const result = await UserService.list();
    const payload = {
      success: true,
      users: [
        { id: 1, name: 'Michael Jackson', email: 'michael@gmail.com', date: null },
        { id: 2, name: 'Bruce Springsteen', email: 'bruce@gmail.com', date: '1998-12-06T01:00:00.000Z' },
      ],
    };
    dispatch({ type: USER_LIST, payload });
    return result;
  },

  get: ({ id }: { id: string }): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
    const result = await UserService.getById(id);
    const payload = { success: true, user: result.user };
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
