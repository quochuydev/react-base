import _ from 'lodash';

import { initUserState } from '../../common/initData';
import { USER_GET, USER_EDIT } from '../../common/constants';
import { UserState } from '../../common/interfaces';
import { UserActionTypes } from '../../common/types';

export function userReducer(
  state: UserState = initUserState,
  action: UserActionTypes
) {
  switch (action.type) {
    case USER_GET: {
      return _.merge(state, action.payload);
    }
    case USER_EDIT: {
      return Object.assign({}, state.user, {});
    }
    default:
      return state;
  }
}
