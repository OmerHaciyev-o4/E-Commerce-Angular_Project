import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { UserBase } from '../auth/userBase';
import { ColorService } from '../colors/color.service';
import { AlertifyService } from '../services/alertify.service';
import { Card } from './card';
import { CardService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [AuthService, CookieService, ColorService, CardService, AlertifyService]
})
export class CardsComponent implements OnInit {
  user: User = null;
  userBase: UserBase = null;
  isUserCheck: boolean = false;
  cards: Card[] = null;
  colors: Map<string, string> = null;
  total: number = 0;
  preload: boolean = false;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private colorService: ColorService,
    private cardService: CardService,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userBase = JSON.parse(localStorage.getItem("userBase"));

    if (this.userBase) {
      var JSONResult = this.cookieService.get(`${this.user.email}cards`);
      this.cards = JSONResult == "" ? null : JSON.parse(JSONResult);

      if (this.cards) {
        for (let i = 0; i < this.cards.length; i++) {
          const card = this.cards[i];
          const total = card.count * card.product.price;
          this.total += total;
        }
      }
    }

    if (this.userBase.role == "admin") {
      this.isUserCheck = true;
    }

    this.colorService.getColors().subscribe(response => {
      this.colors = new Map<string, string>();

      for (let i = 0; i < response.length; i++) {
        const color = response[i];
        this.colors.set(color.id, color.name);
      }
    });
  }

  productCountChange(){
    var indexArr: number[] = [];
    this.total = 0;

    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      if (card.count > 0) {
        const total = card.count * card.product.price;
        this.total += total;        
      }
      else{
        indexArr.push(i);
      }
    }

    for (let i = 0; i < indexArr.length; i++) {
      const index = indexArr[i];
      this.cards.splice(index, index + 1);
    }

    this.cookieService.set(`${this.user.email}cards`, JSON.stringify(this.cards));
  }

  deleteCard(index: any){
    this.cards.splice(index, index + 1);
    this.productCountChange();
  }

  ordering(){
    this.preload = true;
    var orderedCardCount = 0;

    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      this.cardService.ordering(card, this.user.id).subscribe(response => {
        orderedCardCount++;
      });
    }

    var timer = setInterval(
      (orderedCardCount: any, cardslength: any, cookieService: any, userEmail: any, preload: any)=>{
        if (orderedCardCount != cardslength) {
          cookieService.set(`${userEmail}cards`, null);
          preload = false;
          this.alertifyService.success("All orders have been shipped.");
          this.router.navigate(['/products']);
          clearInterval(timer);
        }
      }, 
      100, 
      orderedCardCount, 
      this.cards.length, 
      this.cookieService,
      this.user.email,
      this.preload, 
      this);
  }
}