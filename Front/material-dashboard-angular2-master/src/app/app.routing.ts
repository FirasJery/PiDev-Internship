import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {SujetComponent} from "./sujet/sujet.component";
import { SujetModificationComponent } from './sujet-modification/sujet-modification.component';
import { SujetAjoutComponent } from './sujet-ajout/sujet-ajout.component';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  { path: 'sujet-modification/:id', component: SujetModificationComponent },
  { path: 'sujet-ajout', component: SujetAjoutComponent },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  { path: 'sujet',      component: SujetComponent },
  { path: 'sujet-modification/:id', component: SujetModificationComponent }, // Assuming the component name is SujetModificationComponent


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
