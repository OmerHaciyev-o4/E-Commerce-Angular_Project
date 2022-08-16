import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  private productsBase: Product[] = [];
  chunkSize: number = 2;
  products: Product[][] = [];
  preload: boolean = true;
  isDeleteMode: boolean;
  filterText: string = "";
  pageNumber: number = 1;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.productsBase = products;
      this.preload = false;

      
      const urlParams = new URLSearchParams(window.location.search);
      const dltMode: String = urlParams.get('dltMode');
      const page: string = urlParams.get('page');

      if (dltMode && dltMode == "true") {
        this.paginationCreate(products, page);
        this.isDeleteMode = true;
        return;
      }
      
      if (products.length == 0) return;

      const categoryId: String = urlParams.get('categoryId');
      const brandId: String = urlParams.get('brandId');
      const colorId: String = urlParams.get('colorId');
      
      if (categoryId != "0" && categoryId != null) 
        products = products.filter(product => { return product.categoryId === categoryId });

      if (brandId != "0" && brandId != null)
        products = products.filter(product => { return product.brandId === brandId });        

      if (colorId != "0" && colorId != null)
        products = products.filter(product => { return product.colorId === colorId });        

      this.paginationCreate(products, page);
    });
  }
  
  paginationCreate(products: Product[], page?: string) {
    const pro = [];
    for (let i = 0; i < products.length; i+= this.chunkSize) {
      const chunk = products.slice(i, i + this.chunkSize);
      i == 0 ? pro.push([]) : "";
      pro.push(chunk);
    }
    
    this.products = pro;

    if (page != null && page != "0"){
      let pg = +(page);
      this.pageNumber = (pg <= 0) || (pg >= this.products.length - 1) ? 1 : pg;
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

  deleteProducts(product: Product){
    console.log(product);
    this.productService.deleteProduct(product.id).subscribe(response => {
      this.reloadAllComponent();
    });
  }

  searchValueChange(){
    this.searchItem(); 
  }

  searchItem(){
    const filteredProducts: Product[] = [];
    this.productsBase.forEach(product => {
      if (product.name.toLocaleLowerCase().includes(this.filterText.toLocaleLowerCase())) {
        filteredProducts.push(product);
      }
    });

    console.log(filteredProducts);

    this.paginationCreate(filteredProducts, null);
  }

  pageNumberChange(pageNumber: number){
    this.pageNumber = pageNumber;
  }
}
