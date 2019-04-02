import { UserI } from '../../shared/models/user.model';
import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  TryToLogin = '[Auth] Try to login',
  TryToLoginSuccess = '[Auth] Try to login: Success',
  TryToLoginFailure = '[Auth] Try to login: Failure',

  Login = '[Login Page] Login',
  GetUserInfo = '[Auth/API] Get User Info',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth/API] Login Success',
  LoginFailure = '[Auth/API] Login Failure',
}

export class TryToLogin implements Action {
  readonly type: string = AuthActionTypes.TryToLogin;
}
export class TryToLoginSuccess implements Action {
  readonly type: string = AuthActionTypes.TryToLoginSuccess;

  constructor(public payload: { user: UserI }) {}
}
export class TryToLoginFailure implements Action {
  readonly type: string = AuthActionTypes.TryToLoginFailure;
}

export class Login implements Action {
  readonly type: string = AuthActionTypes.Login;

  constructor(public payload: { login: string, password: string }) {}
}

export class GetUserInfo implements Action {
    readonly type: string = AuthActionTypes.GetUserInfo;
}

export class Logout implements Action {
  readonly type: string = AuthActionTypes.Logout;
}

export class LoginSuccess implements Action {
  readonly type: string = AuthActionTypes.LoginSuccess;

  constructor(public payload: { user: UserI }) {}
}

export class LoginFailure implements Action {
  readonly type: string = AuthActionTypes.LoginFailure;
}

export type AuthActionsUnion =
  | Logout
  | Login
  | LoginSuccess
  | LoginFailure
  | GetUserInfo
  | TryToLogin
  | TryToLoginSuccess
  | TryToLoginFailure;
