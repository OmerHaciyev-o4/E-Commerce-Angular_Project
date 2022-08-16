import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';
import { UserBase } from '../auth/userBase';
import { Card } from '../cards/card';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ CookieService ]
})
export class NavbarComponent implements OnInit {
  userBase: UserBase = null;
  isAuthenticated: boolean;
  isRole: boolean;
  cardCount: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });

    this.authService.userBase.subscribe(userBase => {
      if (userBase){
        this.isRole = userBase.role == "admin" ? true : false;
        this.userBase = userBase;
      }
    })

    setInterval((cookieService: any, userEmail: any)=>{
      var cardBadge = document.getElementById('cardBadge');
      const cards: Card[] = cookieService.check(`${userEmail}cards`) ? JSON.parse(cookieService.get(`${userEmail}cards`)) : null;
      if (cards) {
        cardBadge.innerHTML = cards.length > 9 ? "9+" : cards.length.toString();
      }
      else
        cardBadge.innerHTML = "0";
    }, 
      10,
      this.cookieService,
      this.userBase.email);
  }
  
  OnLogOut(){
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
