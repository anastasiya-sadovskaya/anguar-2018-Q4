import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/classes-implementing/classes-implementing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: User ;

  constructor(public authService: AuthService, private router: Router) { }

  get userName(): string {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  ngOnInit() {
    const userName = localStorage.getItem('auth');
    this.authService.getUserInfo( userName ).subscribe((user) => this.user = user);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onLogInBtnClick() {
    this.router.navigate(['/login']);
  }

  onLogOutBtnClick() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
