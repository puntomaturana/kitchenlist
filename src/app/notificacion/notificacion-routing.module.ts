import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionPage } from './notificacion.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacionPage
  },
  {
    path: 'creacion',
    loadChildren: () => import('./creacion/creacion.module').then( m => m.CreacionPageModule)
  },
  {
    path: 'eliminacion',
    loadChildren: () => import('./eliminacion/eliminacion.module').then( m => m.EliminacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacionPageRoutingModule {}
