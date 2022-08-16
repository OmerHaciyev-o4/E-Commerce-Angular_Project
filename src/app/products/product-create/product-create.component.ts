import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProductService } from '../product.service';
import { Category } from 'src/app/categories/category'
import { CloudinaryService } from 'src/app/services/cloudinary.service';
import { Brand } from 'src/app/brands/brand';
import { CategoryService } from 'src/app/categories/category.service';
import { BrandService } from 'src/app/brands/brand.service';
import { Color } from 'src/app/colors/color';
import { ColorService } from 'src/app/colors/color.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers: [ ProductService, CloudinaryService]
})

export class ProductCreateComponent implements OnInit {
  file: File;
  url: string;
  preload: boolean = true;
  product: any = {
    price: 1,
    count: 1,
  };
  categories: Category[];
  brands: Brand[];
  colors: Color[];

  constructor(
    private cloudinaryService: CloudinaryService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private colorService: ColorService,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    });

    this.brandService.getBrands().subscribe(response => {
      this.brands = response;
    });

    this.colorService.getColors().subscribe(response => {
      this.colors = response;
      this.preload = false;
    });
  }

  removeFile(){
    this.file = null;
    this.url = null;
  }

  dragOver(dropArea: any, e: any){
    e.stopPropagation();        
    e.preventDefault();
    if (!dropArea.className.includes('dropOver')) {
      dropArea.classList.add('dropOver');
      document.getElementById('dropLabel').innerText = "Come on, let it go. Do not be afraid";
    }
  }

  dragLeave(dropArea: any){
    if (dropArea.className.includes('dropOver')) {
      dropArea.classList.remove('dropOver');
      document.getElementById('dropLabel').innerText = "Drop Image Here";
    }
  }

  dropFile(e: any, dropArea: any){
    e.preventDefault();
    this.dragLeave(dropArea);
    console.log(event);
    console.log(document.getElementById('imgSelector'));
  }

  dragStart(e: any){ 
    e.preventDefault();
  }

  openFileDialog(){
    document.getElementById('imgSelector').focus();
    document.getElementById('imgSelector').click();
  }

  onSelect(event: any){
    this.file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = ()=>{
      this.url = reader.result.toString();
    }
  }

  createProduct(form: NgForm){
    if (this.file) {
      var formData = new FormData();
      formData.append('file', this.file);
      formData.append('upload_preset', 'uw_angular');
      formData.append('cloud_name', 'social-network-web');

      this.preload = true;

      this.cloudinaryService.uploadImage(formData).subscribe(response => {
        this.product.imageUrl = response.secure_url;
        this.product.publishedDate = new Date();
        this.productService.createProduct(this.product).subscribe(data => {
          this.preload = false;
          this.router.navigate(['/home']);
          setTimeout(() => {
            this.alertifyService.success(`${this.product.name} successfully added.`);
          }, 50);
        });
      });
      return;
    }

    this.alertifyService.error('Please select image for product.');
  }
}