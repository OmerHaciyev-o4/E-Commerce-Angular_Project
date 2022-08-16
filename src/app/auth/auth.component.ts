import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  preload: boolean = false;
  isLoginMode: boolean = true;
  err: any = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onChangeMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm){
    if (authForm.invalid) 
      return;

    this.preload = true;
    const email = authForm.value.email;
    const password = authForm.value.password;
    
    let authResponse: Observable<AuthResponse>;

    if (this.isLoginMode) {
      authResponse = this.authService.login(email, password);
    }
    else{
      authResponse = this.authService.register(email, password);
    }

    authResponse.subscribe(response => {
      this.preload = false;
      this.router.navigate(['/home']);
    },
    err => {
      this.preload = false;
      this.err = err;
    });
  }
}
