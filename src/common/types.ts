import { SignInAction, IUser } from './interfaces';
import { USER_LIST, USER_GET, USER_CREATE, USER_EDIT, LOGGED_USER } from './constants';

interface UsingUser {
  type: typeof LOGGED_USER;
  payload: IUser;
}

export type AuthActionTypes = SignInAction | UsingUser;

interface UserGetAction {
  type: typeof USER_GET;
  payload: IUser;
}

interface UserCreateAction {
  type: typeof USER_CREATE;
  payload: IUser;
}

interface UserAction {
  type: typeof USER_LIST | typeof USER_EDIT;
  payload: IUser;
}

export type UserActionTypes = UserGetAction | UserCreateAction | UserAction;
