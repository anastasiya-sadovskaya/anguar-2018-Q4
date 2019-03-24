import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserI } from '../../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: UserI ;

  constructor(public authService: AuthService, private router: Router) { }

  get userName(): string {
    return `${this.user.name.first} ${this.user.name.last}`;
  }

  ngOnInit() {
    const userName = localStorage.getItem('auth');
    this.authService.getUserInfo().subscribe((user) => this.user = user);
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
