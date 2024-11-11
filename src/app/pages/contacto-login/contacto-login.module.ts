import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactoLoginPageRoutingModule } from './contacto-login-routing.module';

import { ContactoLoginPage } from './contacto-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoLoginPageRoutingModule
  ],
  declarations: [ContactoLoginPage]
})
export class ContactoLoginPageModule {}
