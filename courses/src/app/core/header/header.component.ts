import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserI } from '../../shared/models/user.model';
import { Store } from '@ngrx/store';

import { State } from '../../auth/store/auth.reducer';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: UserI;

  constructor(
    public authService: AuthService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store<State>
  ) { }

  get userName(): string {
    return `${this.user.name.first} ${this.user.name.last}`;
  }

  ngOnInit() {
    this.store.select('auth').subscribe((authInfo) => {
      this.user = authInfo.user;
    });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onLogInBtnClick() {
    this.router.navigate(['/login']);
  }

  onLogOutBtnClick() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
