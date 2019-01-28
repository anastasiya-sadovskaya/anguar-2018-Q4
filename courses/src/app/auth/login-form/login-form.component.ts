import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  private userName:string;
  private password:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginClick(){
    console.log('userName:', this.userName, 'password:', this.password);
    this.authService.logIn(this.userName, this.password).subscribe(() => this.router.navigate(['/courses']))
  }

} 
