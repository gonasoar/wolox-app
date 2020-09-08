import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';
import { ListadoComponent } from './components/views/listado/listado.component';
import { LandingPageComponent } from './components/views/landing-page/landing-page.component';


const appRoutes = [
  { path: '', component: LoginComponent,  pathMatch: 'full'},
  { path: 'listado-tech', component: ListadoComponent},
  { path: 'landing-page', component: LandingPageComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
