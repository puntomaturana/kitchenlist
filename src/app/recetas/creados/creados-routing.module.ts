import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreadosPage } from './creados.page';

const routes: Routes = [
  {
    path: '',
    component: CreadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreadosPageRoutingModule {}
