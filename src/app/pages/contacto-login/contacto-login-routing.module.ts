import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoLoginPage } from './contacto-login.page';

const routes: Routes = [
  {
    path: '',
    component: ContactoLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoLoginPageRoutingModule {}
