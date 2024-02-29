import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";
import {ReclamationComponent} from "./components/Reclamationn/reclamation/reclamation.component";
import {ReclamationListComponent} from "./components/Reclamationn/reclamation-list/reclamation-list.component";
import {ReclamationEditComponent} from "./components/Reclamationn/reclamation-edit/reclamation-edit.component";

const routes: Routes = [
  { path:'' , component : FrontHomeComponent },
  { path: 'back', component : BackHomeComponent },
  { path: 'reclamation', component : ReclamationComponent },
  { path: 'reclamationlist', component : ReclamationListComponent },
  { path: 'modifier-reclamation/:id', component: ReclamationEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
