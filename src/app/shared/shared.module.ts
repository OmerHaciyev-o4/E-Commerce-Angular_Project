import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadComponent } from './preload/preload.component';


@NgModule({
    declarations: [
        PreloadComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PreloadComponent,
        CommonModule
    ],
    providers: [],
})
export class SharedModule { }
