import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreadosPageRoutingModule } from './creados-routing.module';

import { CreadosPage } from './creados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreadosPageRoutingModule
  ],
  declarations: [CreadosPage]
})
export class CreadosPageModule {}
