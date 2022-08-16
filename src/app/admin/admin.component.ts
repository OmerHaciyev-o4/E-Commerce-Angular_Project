import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserBase } from '../auth/userBase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userBase: UserBase;
  isDeleteMode: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.userBase.subscribe(userBase => {
      this.userBase = userBase;
    });
  }

  changeMode(){
    this.isDeleteMode = !this.isDeleteMode;
  }

}
