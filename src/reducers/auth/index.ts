import { SIGN_IN } from "../../common/constants";
import { AuthActionTypes } from "../../common/types";
import { IUser, AuthState } from "../../common/interfaces";

export function authReducer(
  state: AuthState = {
    user: {} as IUser,
  },
  action: AuthActionTypes
) {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
