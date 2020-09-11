import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';
import { ListadoComponent } from './components/views/listado/listado.component';
import { LandingPageComponent } from './components/views/landing-page/landing-page.component';
import { AuthGuard } from './components/guards/auth.guard';


const appRoutes: Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full'},
  // { path: 'listado-tech', component: ListadoComponent},
  // { path: 'landing-page', component: LandingPageComponent}
  // { path: 'landing-page', component: LandingPageComponent, canActivate: [AuthGuard]}
  // {path: '', component: LoginComponent,  pathMatch: 'full'},
  {path: 'landing-page', loadChildren: () => import('src/app/landing/landing.module').then(m => m.LandingModule), canActivate: [AuthGuard]},
  {path: 'listado-tech', loadChildren: () => import('src/app/listado/listado.module').then(m => m.ListadoModule), canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(appRoutes);

