import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductHomeComponent } from "./product-home/product-home.component";
import { ProductsComponent } from "./products.component";

const routes: Routes =[
  {
    path: '',
    component: ProductHomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProductsComponent },
      { path: 'create', component: ProductCreateComponent },
      { path: ':productId', component: ProductDetailsComponent },
    ]
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule{}