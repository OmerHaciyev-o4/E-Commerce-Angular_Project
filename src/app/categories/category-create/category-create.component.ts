import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  preload: boolean;
  category: any = {};
  constructor(
    private categoryService: CategoryService,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  createCategory(){
    if (this.category.name && this.category.name != '') {
      this.preload = true;
      this.categoryService.createCategory(this.category).subscribe(response => {
        setTimeout(() => {
          this.alertifyService.success(`${this.category.name} successfully added.`)
        }, 50);
        this.router.navigate(['/categories']);
      });
    }
  }
}
