import { SignInAction, IUser } from './interfaces';
import { USER_GET,USER_EDIT } from './constants';

export type AuthActionTypes = SignInAction;

interface UserGetAction {
  type: typeof USER_GET;
  payload: IUser;
  error?: string;
}

interface UserEditAction {
  type: typeof USER_EDIT;
  payload: IUser;
  error?: string;
}

export type UserActionTypes = UserGetAction | UserEditAction;
