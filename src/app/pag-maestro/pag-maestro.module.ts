import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagMaestroPageRoutingModule } from './pag-maestro-routing.module';

import { PagMaestroPage } from './pag-maestro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagMaestroPageRoutingModule
  ],
  declarations: [PagMaestroPage]
})
export class PagMaestroPageModule {}
