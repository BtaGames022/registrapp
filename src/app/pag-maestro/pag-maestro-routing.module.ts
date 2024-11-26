import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagMaestroPage } from './pag-maestro.page';

const routes: Routes = [
  {
    path: '',
    component: PagMaestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagMaestroPageRoutingModule {}
