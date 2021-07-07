import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../recetas/recomendadas/recomendadas.module').then(m => m.RecomendadasPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../recetas/nueva/nueva.module').then(m => m.NuevaPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../perfil/datos/datos.module').then(m => m.DatosPageModule)
      },
      /*{
        path: 'tab4',
        loadChildren: () => import('../registro/registro.module').then(m => m.RegistroPageModule)
      },*/
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
