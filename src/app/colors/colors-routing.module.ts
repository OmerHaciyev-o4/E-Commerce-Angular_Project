import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SpecialAuthGuard } from "../auth/specialAuth.guard";
import { ColorCreateComponent } from "./color-create/color-create.component";
import { ColorsComponent } from "./colors.component";

const routes: Routes = [
    {path: '', component: ColorsComponent, canActivate: [SpecialAuthGuard]},
    {path: 'create', component: ColorCreateComponent, canActivate: [SpecialAuthGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ColorsRoutingModule{}