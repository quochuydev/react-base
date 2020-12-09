import _ from 'lodash';

import { SIGN_IN, LOGGED_USER } from '../../common/constants';
import { AuthActionTypes } from '../../common/types';
import { IUser, AuthState } from '../../common/interfaces';

export function authReducer(
  state: AuthState = {
    user: {} as IUser,
  },
  { type, payload }: AuthActionTypes
): TODO {
  state = _.cloneDeep(state);
  switch (type) {
    case SIGN_IN:
      return Object.assign({}, state, {});
    case LOGGED_USER: {
      const result = _.merge(state, { ...payload });
      return result;
    }
    default:
      return state;
  }
}
