import { UserI } from '../../shared/models/user.model';

import * as AuthActions from './auth.actions';

export interface State {
  user: UserI | null;
  authenticated: boolean;
}

export const initialState: State = {
  user: null,
  authenticated: false
};

export function reducer(state: State = initialState, action): State {
  switch (action.type) {
    case AuthActions.AuthActionTypes.TryToLoginSuccess:
    case AuthActions.AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        user: action.payload.user,
        authenticated: true
      };
    }

    case AuthActions.AuthActionTypes.TryToLoginFailure:
    case AuthActions.AuthActionTypes.LoginFailure:
    case AuthActions.AuthActionTypes.Logout: {
        return initialState;
    }

    default: {
      return state;
    }
  }
}
