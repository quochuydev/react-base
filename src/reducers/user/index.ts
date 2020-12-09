import _ from 'lodash';

import { initUserState } from '../../common/data';
import { USER_GET, USER_EDIT, USER_CREATE } from '../../common/constants';
import { UserState } from '../../common/interfaces';
import { UserActionTypes } from '../../common/types';

export function userReducer(
  state: UserState = _.cloneDeep(initUserState),
  { type, payload }: UserActionTypes
): UserState {
  state = _.cloneDeep(state);
  switch (type) {
    case USER_GET:
    case USER_EDIT:
    case USER_CREATE: {
      const result = _.merge(state, { ...payload });
      return result;
    }
    default:
      return state;
  }
}
