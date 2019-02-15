import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../classes-implementing/classes-implementing'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public logIn(userName: string, password: string): Observable<void> {
    localStorage.setItem('auth', userName);

    return of(null);
  }

  public logOut(): Observable<void> {
    localStorage.removeItem('auth');

    return of(null);
  }

  public isAuthenticated(): Boolean {
    return !!localStorage.getItem('auth');
  }

  public getUserInfo(): Observable<User> {
    const user: User = new User(0, 'Anastasiya', 'Sadouskaya', '');
    user.userName = localStorage.getItem('auth');

    return of(user);
  }
}
