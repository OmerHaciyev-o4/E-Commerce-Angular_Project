import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  displayYear: number;
  constructor() { }

  ngOnInit(): void {
    var currentDate = new Date();
    this.displayYear = currentDate.getFullYear();    
  }
}
