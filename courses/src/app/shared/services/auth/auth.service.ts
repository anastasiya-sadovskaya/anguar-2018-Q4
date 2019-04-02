import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from '../../classes-implementing/classes-implementing';
import { UserI } from '../../models/user.model';

const BASE_URL = `http://localhost:3004/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Subject<UserI> = new Subject();

  constructor(private http: HttpClient) { }

  public logIn(login: string, password: string) {
    return this.http.post(`${BASE_URL}/login`, { login, password });
  }

  public logOut(): Observable<void> {
    localStorage.removeItem('auth');

    return of(null);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('auth');
  }

  public getUserInfo(): void {
    this.http.post(`${BASE_URL}/userinfo`, null).subscribe((user:UserI) => {
      this.user.next(user);
    });
  }
}
