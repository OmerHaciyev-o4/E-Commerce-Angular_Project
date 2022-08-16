import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  displayAll: boolean = true;
  preload: boolean;
  isDeleteMode: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit(): void {
    this.preload = true;
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
      this.preload = false;

      const urlParams = new URLSearchParams(window.location.search);
      const categoryId: String = urlParams.get('categoryId');
      const dltMode: String = urlParams.get('dltMode');
      if (dltMode && dltMode == "true")
          this.isDeleteMode = true;

      if (categoryId == "0") {
        this.selectCategory();        
      }
      else if(categoryId != null){
        var id=0;

        for (let i = 0; i < this.categories.length; i++) {
          const category = this.categories[i];
          if (category.id == categoryId){
            id = i;
            break;
          }
        };

        this.selectCategory(this.categories[Number(id)]);
      }
    });
  }
  
  selectCategory(category?: Category) {
    if (category) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
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
    this.categoryService.deleteCategory(null).subscribe(response => {
      this.reloadAllComponent("/categories");
      this.alertifyService.warning('All categories deleted');
    });
  }
  
  deleteBrand(category: Category){
    this.categoryService.deleteCategory(category.id).subscribe(response => {
      this.reloadAllComponent("/categories");
      this.alertifyService.warning( category.name + ' deleted');
    });
  }
}
