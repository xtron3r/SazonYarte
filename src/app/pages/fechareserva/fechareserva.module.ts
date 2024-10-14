import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FechareservaPageRoutingModule } from './fechareserva-routing.module';

import { FechareservaPage } from './fechareserva.page';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FechareservaPageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  declarations: [FechareservaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FechareservaPageModule {}
