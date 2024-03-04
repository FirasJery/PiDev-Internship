import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";
import { SujetComponent } from './front/sujet/sujet.component';
import { SujetAjoutComponent } from './back/sujet-ajout/sujet-ajout.component';
import { SujetAfficherComponent } from './back/sujet-afficher/sujet-afficher.component';
import { PostulationComponent } from './front/postulation/postulation.component';
import { AffichPostulationComponent } from './front/affich-postulation/affich-postulation.component';

const routes: Routes = [
  {
    path: 'postuler/:idsujet', component: PostulationComponent},
    { path: '', redirectTo: 'front', pathMatch: 'full' }, 
  { path:'front' , component : FrontHomeComponent },
  { path:'postuler' , component : PostulationComponent },
  { path:'affich_postulation' , component : AffichPostulationComponent },
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
