import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FechareservaPage } from './fechareserva.page';

const routes: Routes = [
  {
    path: '',
    component: FechareservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FechareservaPageRoutingModule {}
