import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';

import { CategoriesComponent } from './categories.component';
import { CategoryCreateComponent } from './category-create/category-create.component';

@NgModule({
    declarations: [
        CategoriesComponent,
        CategoryCreateComponent,
    ],
    imports: [
        CategoriesRoutingModule,
        FormsModule,
        CommonModule,
        SharedModule
    ],
    exports: [
        CategoriesComponent,
        CategoryCreateComponent,
    ]
})
export class CategoriesModule { }
