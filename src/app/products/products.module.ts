import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductHomeComponent } from "./product-home/product-home.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";

import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CategoriesModule } from "../categories/categories.module";
import { BrandsModule } from "../brands/brands.module";
import { ColorsModule } from "../colors/colors.module";
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
    declarations:[
        ProductHomeComponent,
        ProductsComponent,
        ProductCreateComponent,
        ProductDetailsComponent
    ],
    imports: [
        ProductsRoutingModule,
        CommonModule,
        FormsModule,
        SharedModule,
        CategoriesModule,
        BrandsModule,
        ColorsModule,
    ]
})

export class ProductsModule{}