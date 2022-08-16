import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { Brand } from './brand';
import { BrandService } from './brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: Brand[] = [];
  selectedBrand: Brand | null = null;
  displayAll: boolean = true;
  preload: boolean;
  isDeleteMode = false;
  
  constructor(
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute,
    private alertifyService: AlertifyService
    ) { }

  ngOnInit(): void {
    this.preload = true;

    this.brandService.getBrands().subscribe(response => {
      this.brands = response;
      this.preload = false;

      const urlParams = new URLSearchParams(window.location.search);
      const brandId: String = urlParams.get('brandId');
      const dltMode: String = urlParams.get('dltMode');
      if (dltMode && dltMode == "true")
          this.isDeleteMode = true;

      if (brandId == "0") {
        this.selectBrand();        
      }
      else if(brandId != null){
        var id=0;

        for (let i = 0; i < this.brands.length; i++) {
          const brand = this.brands[i];
          if (brand.id == brandId){
            id = i;
            break;
          }
        };

        this.selectBrand(this.brands[Number(id)]);
      }
    });
  }

  selectBrand(brand?: Brand) {
    if (brand) {
      this.selectedBrand = brand;
      this.displayAll = false;
    } else {
      this.selectedBrand = null;
      this.displayAll = true;
    }
  }

  reloadAllComponent(route?: string){
    setTimeout(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = "reload";
      this.router.navigate([route ? route : "/products"], {
        relativeTo: this.route,
        queryParamsHandling: "merge"
      });
    }, 10);
  }

  allDelete(){
    this.brandService.deleteBrand(null).subscribe(response => {
      this.reloadAllComponent("/brands");
      this.alertifyService.warning('All brand deleted');
    });
  }
  
  deleteBrand(brand: Brand){
    this.brandService.deleteBrand(brand.id).subscribe(response => {
      this.reloadAllComponent("/brands");
      this.alertifyService.warning( brand.name + ' deleted');
    });
  }
}