import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasPage } from './recetas.page';

const routes: Routes = [
  {
    path: '',
    component: RecetasPage
  },
  {
    path: 'nueva',
    loadChildren: () => import('./nueva/nueva.module').then( m => m.NuevaPageModule)
  },
  {
    path: 'guardadas',
    loadChildren: () => import('./guardadas/guardadas.module').then( m => m.GuardadasPageModule)
  },
  {
    path: 'recomendadas',
    loadChildren: () => import('./recomendadas/recomendadas.module').then( m => m.RecomendadasPageModule)
  },
  {
    path: 'creados',
    loadChildren: () => import('./creados/creados.module').then( m => m.CreadosPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasPageRoutingModule {}
