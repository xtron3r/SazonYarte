import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisreservasPageRoutingModule } from './misreservas-routing.module';

import { MisreservasPage } from './misreservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisreservasPageRoutingModule
  ],
  declarations: [MisreservasPage]
})
export class MisreservasPageModule {}
