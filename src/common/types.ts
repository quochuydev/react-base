import { SignInAction, IUser } from './interfaces';
import { USER_GET, USER_CREATE, USER_EDIT, LOGGED_USER } from './constants';

interface UsingUser {
  type: typeof LOGGED_USER;
  payload: IUser;
}

export type AuthActionTypes = SignInAction | UsingUser;

interface UserGetAction {
  type: typeof USER_GET;
  payload: IUser;
  error?: string;
}

interface UserCreateAction {
  type: typeof USER_CREATE;
  payload: IUser;
}

interface UserEditAction {
  type: typeof USER_EDIT;
  payload: IUser;
}

export type UserActionTypes = UserGetAction | UserCreateAction | UserEditAction;
