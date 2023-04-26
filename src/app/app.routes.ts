import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tarefa-nova',
    loadComponent: () => import('./tarefa-nova/tarefa-nova.page').then( m => m.TarefaNovaPage)
  },
  {
    path: 'tarefa-atualiza',
    loadComponent: () => import('./tarefa-atualiza/tarefa-atualiza.page').then( m => m.TarefaAtualizaPage)
  },
];
