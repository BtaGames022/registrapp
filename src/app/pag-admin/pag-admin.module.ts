import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagAdminPageRoutingModule } from './pag-admin-routing.module';

import { PagAdminPage } from './pag-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagAdminPageRoutingModule
  ],
  declarations: [PagAdminPage]
})
export class PagAdminPageModule {}
