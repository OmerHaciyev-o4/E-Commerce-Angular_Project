import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-create',
  templateUrl: './color-create.component.html',
  styleUrls: ['./color-create.component.css']
})
export class ColorCreateComponent implements OnInit {
  preload: boolean;
  color: any = {};

  constructor(
    private colorService: ColorService,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  createColor(){
    if (this.color.name && this.color.name != '') {
      this.preload = true;
      this.colorService.createColor(this.color).subscribe(response => {
        setTimeout(() => {
          this.alertifyService.success(`${this.color.name} successfully added.`)
        }, 50);
        this.router.navigate(['/colors']);
      });
    }
  }
}
