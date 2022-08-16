import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {
  brand: any = {};
  preload: boolean;
  constructor(
    private brandService: BrandService,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  createBrand(){
    if (this.brand.name && this.brand.name != '') {
      this.preload = true;
      this.brandService.createBrand(this.brand).subscribe(response => {
        setTimeout(() => {
          this.alertifyService.success(`${this.brand.name} successfully added.`);
        }, 50);
        this.preload = false;
        this.router.navigate(['/brands']);
      })      
    }
  }
}
