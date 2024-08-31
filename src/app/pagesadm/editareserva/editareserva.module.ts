import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditareservaPageRoutingModule } from './editareserva-routing.module';

import { EditareservaPage } from './editareserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditareservaPageRoutingModule
  ],
  declarations: [EditareservaPage]
})
export class EditareservaPageModule {}
