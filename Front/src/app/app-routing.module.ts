import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";
import { SujetComponent } from './front/sujet/sujet.component';
import { SujetAjoutComponent } from './back/sujet-ajout/sujet-ajout.component';
import { SujetAfficherComponent } from './back/sujet-afficher/sujet-afficher.component';

const routes: Routes = [
  { path:'front' , component : FrontHomeComponent },
  { path: 'back', component : BackHomeComponent },
  { path: 'sujets', component: SujetComponent },
  { path: 'ajoutsujet', component: SujetAjoutComponent },
  { path: 'affichsujet', component: SujetAfficherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
