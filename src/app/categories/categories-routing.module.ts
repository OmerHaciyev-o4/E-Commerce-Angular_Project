import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SpecialAuthGuard } from "../auth/specialAuth.guard";
import { CategoriesComponent } from "./categories.component";
import { CategoryCreateComponent } from "./category-create/category-create.component";

const routes: Routes = [
    {path: '', component: CategoriesComponent, canActivate: [SpecialAuthGuard]},
    {path: 'create', component: CategoryCreateComponent, canActivate: [SpecialAuthGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CategoriesRoutingModule{}