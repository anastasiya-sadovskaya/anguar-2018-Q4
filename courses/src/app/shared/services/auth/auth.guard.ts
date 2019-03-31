import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';

import { State } from '../../../auth/store/auth.reducer';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authenticated: boolean;

  constructor(private authService: AuthService, private router: Router, private store: Store<State>) {}

  canActivate(): Observable<boolean> {
      this.store.select('auth').subscribe((store) => {
        this.authenticated = store.authenticated;
      });
      return of(this.authenticated);
  }
}
