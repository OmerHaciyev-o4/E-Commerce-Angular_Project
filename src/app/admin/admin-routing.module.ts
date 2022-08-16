import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SpecialAuthGuard } from "../auth/specialAuth.guard";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [SpecialAuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}