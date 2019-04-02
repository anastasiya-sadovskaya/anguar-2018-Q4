import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from './auth/store/auth.actions';
import { State } from './auth/store/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(new AuthActions.TryToLogin());
  }
}
