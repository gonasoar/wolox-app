import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';
import { AuthGuard } from './components/guards/auth.guard';


const appRoutes: Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full'},
  {path: 'landing-page', loadChildren: () => import('src/app/components/views/landing/landing.module').then(m => m.LandingModule), canActivate: [AuthGuard]},
  {path: 'listado-tech', loadChildren: () => import('src/app/components/views/listado/listado.module').then(m => m.ListadoModule), canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(appRoutes);

