import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendadasPage } from './recomendadas.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendadasPageRoutingModule {}
