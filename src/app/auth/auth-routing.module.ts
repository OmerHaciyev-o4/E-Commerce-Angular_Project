import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFound404Component } from "../not-found404/not-found404.component";
import { AuthComponent } from "./auth.component";

const routes: Routes = [
    {path: '', component: AuthComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule{}