import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagEstudiantePage } from './pag-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: PagEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagEstudiantePageRoutingModule {}
