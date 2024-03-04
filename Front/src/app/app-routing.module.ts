import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";
import {JournalstudentComponent} from "./front/journalstudent/journalstudent.component";

const routes: Routes = [
  { path:'front' , component : FrontHomeComponent },
  { path: 'back', component : BackHomeComponent },
  { path: 'front/journalstudent/:id', component : JournalstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
