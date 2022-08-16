import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth/auth.service';
import { Brand } from 'src/app/brands/brand';
import { BrandService } from 'src/app/brands/brand.service';
import { Card } from 'src/app/cards/card';
import { Category } from 'src/app/categories/category';
import { CategoryService } from 'src/app/categories/category.service';
import { Color } from 'src/app/colors/color';
import { ColorService } from 'src/app/colors/color.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CloudinaryService } from 'src/app/services/cloudinary.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ CookieService ]
})
export class ProductDetailsComponent implements OnInit {
  preload: boolean = true;
  selectedImageFile: File = null;
  
  productBase: Product;
  product: Product;
  categories: Category[];
  brands: Brand[];
  colors: Color[];

  rowCount: number = 1;
  selectedCount: number = 1;

  isAuthenticated: boolean;
  isVisible: boolean = true;

  GMAIL: string;



  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRouted:ActivatedRoute,
    private cookieService:CookieService,
    private alertifyService: AlertifyService,
    private cloudinaryService: CloudinaryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params => {
      this.productService.getProductById(params["productId"]).subscribe(product => {
        this.productBase = {...product};
        this.product = product;


        for (let i = 0; i < product.description.length; i++) {
          const character = product.description[i];
          if (character == '\n') 
            this.rowCount++;            
        }
        this.preload = false;
      });

      this.categoryService.getCategories().subscribe(response => {
        this.categories = response;
      });

      this.brandService.getBrands().subscribe(response => {
        this.brands = response;
      });

      this.colorService.getColors().subscribe(response => {
        this.colors = response;
      });
    });

    this.authService.userBase.subscribe(userBase => {
      if (userBase){
        this.isAuthenticated = userBase.role == "admin" ? true : false;
        this.GMAIL = userBase.email;
      }
    })
  }



  selectImage(event: any){
    this.selectedImageFile = event.target.files[0];

    var img = document.getElementById('proImg') as HTMLImageElement;
    img.src = URL.createObjectURL(this.selectedImageFile);
  }

  openFiles(){
    document.getElementById('imageUrl').click();
  }

  addToCard(){
    var allCards: Card[] = this.cookieService.check(`${this.GMAIL}cards`) ? JSON.parse(this.cookieService.get(`${this.GMAIL}cards`)) : null;

    if (allCards) {
      var index = -1;

      for (let i = 0; i < allCards.length; i++) {
        const card = allCards[i];

        if (card.id == this.product.id) {
          index = i;
          break;
        }
      }
      
      index >= 0 ? allCards[index].count++ : allCards.push(this.addNewCard());
    }    
    else{
      allCards = [];
      allCards.push(this.addNewCard());
    }

    this.cookieService.delete(`${this.GMAIL}cards`);
    this.cookieService.set(`${this.GMAIL}cards`, JSON.stringify(allCards));

    this.alertifyService.success(this.product.name + ' added successfully.');
  }

  addNewCard(){
    return {
      id: this.product.id,
      product: this.product,
      count: 1
    };
  }

  changeMode(){
    this.isVisible = !this.isVisible;

    const inputs: string[] = ['name', 'description', 'price'];

    inputs.forEach(inp => {
      var vrb = document.getElementById(inp);

      this.isVisible ? vrb.setAttribute('readonly', 'readonly') : vrb.removeAttribute('readonly');
    });

    if (this.isVisible) {
        this.updateProduct();
    }
  }

  productUpdateBridge(){
    this.product.publishedDate = new Date();

    this.productService.updateProduct(this.product).subscribe(data => {
      this.preload = false;
      setTimeout(() => {
        this.alertifyService.warning(`${this.product.name} update successfully.`);
      }, 50);
    });
  }

  updateProduct(){
    var result = this.selectedImageFile ? true : false;

    this.preload = true;

    if (result) {
      var formData = new FormData();
      formData.append('file', this.selectedImageFile);
      formData.append('upload_preset', 'uw_angular');
      formData.append('cloud_name', 'social-network-web');

      this.cloudinaryService.uploadImage(formData).subscribe(response => {
        this.product.imageUrl = response.secure_url;

        this.productUpdateBridge();
      });
    }
    else if(JSON.stringify(this.product) != JSON.stringify(this.productBase) ? true : false){
      this.productUpdateBridge();
    }
    else
      this.preload = false;
  }

  deleteProduct(){
    this.productService.deleteProduct(this.product.id).subscribe(response => {
      this.router.navigate(['/products']);
    })
  }
}