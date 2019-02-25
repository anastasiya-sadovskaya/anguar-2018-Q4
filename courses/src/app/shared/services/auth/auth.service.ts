import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../classes-implementing/classes-implementing';
import { UserI } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersList: UserI[] = [
    {
      id: 1,
      firstName: 'Anastasiya',
      lastName: 'Sadouskaya',
      userName: 'Nastiusha',
      password: '12345',
    },
    {
      id: 2,
      firstName: 'Ivan',
      lastName: 'Ivanou',
      userName: 'HotBoy',
      password: '54321',
    }
  ];

  constructor() { }

  public logIn(userName: string, password: string): Observable<boolean> {
    const user: User = this.usersList.filter(u => u.userName === userName)[0];
    if (user && user.password === password) {
      localStorage.setItem('auth', userName);
    }
    return of(!!localStorage.getItem('auth'));
  }

  public logOut(): Observable<void> {
    localStorage.removeItem('auth');

    return of(null);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('auth');
  }

  public getUserInfo(userName): Observable<User> {
    const user: User = this.usersList.filter(u => u.userName === userName)[0];

    return of(user);
  }
}
