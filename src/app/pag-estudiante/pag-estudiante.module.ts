import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagEstudiantePageRoutingModule } from './pag-estudiante-routing.module';

import { PagEstudiantePage } from './pag-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagEstudiantePageRoutingModule
  ],
  declarations: [PagEstudiantePage]
})
export class PagEstudiantePageModule {}
