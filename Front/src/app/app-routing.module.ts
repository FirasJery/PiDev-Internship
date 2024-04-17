import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";
import {ReclamationComponent} from "./components/Reclamationn/reclamation/reclamation.component";
import {ReclamationListComponent} from "./components/Reclamationn/reclamation-list/reclamation-list.component";
import {ReclamationEditComponent} from "./components/Reclamationn/reclamation-edit/reclamation-edit.component";
import {ReponseComponent} from "./components/Reponsee/reponse/reponse.component";
import {ReponseListComponent} from "./components/Reponsee/reponse-list/reponse-list.component";
import {ReclamationStatistiqueComponent} from "./components/Reclamationn/reclamation-statistique/reclamation-statistique.component";
import {ReclamationEditUserComponent} from "./components/Reclamationn/reclamation-edit-user/reclamation-edit-user.component";
import {ReclamationListUserComponent} from "./components/Reclamationn/reclamation-list-user/reclamation-list-user.component";

const routes: Routes = [
  { path:'' , component : FrontHomeComponent },
  { path: 'back', component : BackHomeComponent },
  { path: 'reclamation', component : ReclamationComponent },
  { path: 'reclamationList', component : ReclamationListComponent },
  { path: 'reclamationEdit/:id', component: ReclamationEditComponent },
  { path: 'reponse', component:ReponseComponent},
  { path: 'reponseList', component:ReponseListComponent},
  { path: 'reclamationStatistique', component : ReclamationStatistiqueComponent},
  { path: 'reclamationEditUser/:id', component : ReclamationEditUserComponent},
  { path: 'reclamationListUser', component : ReclamationListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
