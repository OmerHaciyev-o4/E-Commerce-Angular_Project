import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SpecialAuthGuard } from "../auth/specialAuth.guard";
import { BrandCreateComponent } from "./brand-create/brand-create.component";
import { BrandsComponent } from "./brands.component";

const routes: Routes =[
    {path: '', component: BrandsComponent, canActivate: [SpecialAuthGuard]},
    {path: 'create', component: BrandCreateComponent, canActivate: [SpecialAuthGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrandsRoutingModule{}