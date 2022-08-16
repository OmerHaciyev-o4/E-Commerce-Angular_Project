import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { BrandService } from './brand.service';
import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';

@NgModule({
    declarations: [
        BrandsComponent,
        BrandCreateComponent
    ],
    imports: [
        BrandsRoutingModule,
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        BrandsComponent,
        BrandCreateComponent
    ]
})
export class BrandsModule { }
