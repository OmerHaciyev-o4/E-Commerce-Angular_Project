import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CardsComponent } from './cards.component';



@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CardsRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule
  ],
  exports: []
})
export class CardsModule { }
