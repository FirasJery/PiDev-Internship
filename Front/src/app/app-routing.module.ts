import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";
import {JournalstudentComponent} from "./front/journalstudent/journalstudent.component";
import {GrilleComponent} from "./back/grille/grille.component";
import {JournalencadrantComponent} from "./front/journalencadrant/journalencadrant.component";
import {DetailsJournalComponent} from "./front/details-journal/details-journal.component";


const routes: Routes = [
  { path:'front' , component : FrontHomeComponent },
  { path: 'back', component : BackHomeComponent },
  { path: 'front/journalstudent/:id', component : JournalstudentComponent},
  { path: 'back/grille', component: GrilleComponent },
  { path: 'front/journalencadrant/:mailEncadrant' , component: JournalencadrantComponent},
  { path: 'front/journalDetails/:id', component :  DetailsJournalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
