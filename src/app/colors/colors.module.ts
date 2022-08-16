import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ColorsRoutingModule } from './colors-routing.module';
import { ColorsComponent } from './colors.component';
import { ColorCreateComponent } from './color-create/color-create.component';

@NgModule({
    declarations: [
        ColorsComponent,
        ColorCreateComponent,
    ],
    imports: [
        ColorsRoutingModule,
        FormsModule,
        CommonModule,
        SharedModule
    ],
    exports: [
        ColorsComponent,
        ColorCreateComponent
    ]
})
export class ColorsModule { }
