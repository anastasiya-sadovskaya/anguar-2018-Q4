import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { empty, of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { UserI } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth/auth.service';
import * as AuthActions from './auth.actions';
import * as fromAuth from './auth.reducer';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {}

    @Effect()
    tryToLogin$ = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.TryToLogin),
        map(() => this.authService.getToken()),
        exhaustMap((token: string) => {
            if (token) {
                return this.authService.getUserInfo().pipe(
                    map((user: UserI) =>  new AuthActions.TryToLoginSuccess({ user })),
                    catchError(() => of(new AuthActions.TryToLoginFailure()))
                );
            } else {
                this.router.navigate(['/login']);
                return empty();
            }
        })
    );

    @Effect({ dispatch: false })
    tryToLoginSuccess$ = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.TryToLoginSuccess),
        tap<any>(() => {
            this.router.navigate(['/courses']);
        })
    );

    @Effect({ dispatch: false })
    tryToLoginFailure$ = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.TryToLoginFailure),
        tap<any>(() => {
            this.router.navigate(['/login']);
        })
    );

    @Effect()
    login$ = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.Login),
        map((action: { payload }) => action.payload),
        exhaustMap((authData) =>
        this.authService.logIn(authData.login, authData.password).pipe(
            map((res: { token }) => {
                this.authService.saveToken(res.token);
                return new AuthActions.GetUserInfo();
            }),
            catchError(error => of(new AuthActions.LoginFailure()))
        )
        )
    );

    @Effect()
    getUserInfo$ = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.GetUserInfo),
        exhaustMap(() =>
            this.authService.getUserInfo().pipe(
                map(user => new AuthActions.LoginSuccess({user})),
                catchError(error => of(new AuthActions.LoginFailure()))
            )
        )
    );

    @Effect({ dispatch: false })
    loginSuccess$ = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.LoginSuccess),
        tap<any>(() => {
            this.router.navigate(['/courses']);
        })
    );

    @Effect({ dispatch: false })
    loginFailure$ = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.LoginFailure),
        tap<any>(() => {
            alert('Incorrect login or password!');
        })
    );

    @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.Logout),
        tap<any>((status: number) => {
            this.authService.removeToken();
            this.router.navigate(['/login']);
        })
    );
}
