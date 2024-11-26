import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagAdminPage } from './pag-admin.page';

const routes: Routes = [
  {
    path: '',
    component: PagAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagAdminPageRoutingModule {}
