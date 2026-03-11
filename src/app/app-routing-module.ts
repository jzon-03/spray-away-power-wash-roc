import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Spray Away Power Washing',
    loadComponent: () =>
      import('./landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'contact',
    title: 'Contact Spray Away',
    loadComponent: () =>
      import('./contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'dashboard',
    title: 'Service Dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
