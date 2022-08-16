import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFound404Component } from './not-found404/not-found404.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule) 
  },
  { 
    path: 'products', 
    loadChildren: () => import('./products/products.module')
      .then(m => m.ProductsModule) 
  },
  { 
    path: 'brands', 
    loadChildren: () => import('./brands/brands.module')
      .then(m => m.BrandsModule) 
  },
  { 
    path: 'categories', 
    loadChildren: () => import('./categories/categories.module')
      .then(m => m.CategoriesModule) 
  },
  { 
    path: 'colors', 
    loadChildren: () => import('./colors/colors.module')
      .then(m => m.ColorsModule) 
  },
  { 
    path: 'cards', 
    loadChildren: () => import('./cards/cards.module')
      .then(m => m.CardsModule) 
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule) 
  },
  {
    path: '**', 
    component: NotFound404Component,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
