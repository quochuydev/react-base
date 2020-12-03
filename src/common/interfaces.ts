import { SIGN_IN, USER_EDIT } from './constants';

export interface Entity {
  id?: number;
}

export interface IUser extends Entity {
  first_name?: string;
  last_name?: string;
  gender?: number;
  birthday?: Date;
  email?: string;
  phone?: string;
  description?: string;
  country?: string;
  address?: string;
  roles?: TODO
}
export interface IUsers extends Array<IUser> {}

export interface UserEditAction {
  type: typeof USER_EDIT;
  payload: { user?: IUser };
  error?: string;
}

export interface UserState {
  user: IUser;
  users: IUsers;
}

export interface AuthState {
  user: IUser;
}

export interface SignInAction {
  type: typeof SIGN_IN;
  payload: { user?: IUser };
  error?: string;
}

export interface Menu {
  key: string;
  title: string;
  path: string;
  icon: any;
  is_open: boolean;
}
export interface Menus extends Array<Menu> {}

export interface Route {
  path: string;
  component: any;
  exact: boolean;
}
export interface Routes extends Array<Route> {}

export interface IAlert {
  open?: boolean;
  message?: string;
  type?: string;
  timeout?: number;
}