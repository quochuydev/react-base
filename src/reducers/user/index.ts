import _ from 'lodash';

import { initUserState } from '../../common/data';
import { USER_GET, USER_EDIT, USER_CREATE, USER_LIST } from '../../common/constants';
import { UserState } from '../../common/interfaces';
import { UserActionTypes } from '../../common/types';

export function userReducer(
  state: UserState = _.cloneDeep(initUserState),
  { type, payload }: UserActionTypes
): UserState {
  state = _.cloneDeep(state);
  switch (type) {
    case USER_LIST: {
      const result = _.merge(state, { ...payload });
      return result;
    }
    case USER_GET: {
      const result = _.merge(_.cloneDeep(initUserState), { ...payload });
      return result;
    }
    case USER_EDIT:
    case USER_CREATE: {
      const result = _.merge(state, { ...payload });
      return result;
    }
    default:
      return state;
  }
}
