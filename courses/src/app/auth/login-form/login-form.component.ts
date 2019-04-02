import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { State } from '../store/auth.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public userName: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router, private store: Store<State>) { }

  ngOnInit() {
  }

  onLoginClick() {
    this.store.dispatch(new AuthActions.Login({login: this.userName, password: this.password}));
  }
}
