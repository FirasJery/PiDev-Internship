import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";
import {CenventionComponent} from "./back/cenvention/cenvention.component";
import {ConventionComponent} from "./front/convention/convention.component";
import {ArchiveconventionComponent} from "./back/archiveconvention/archiveconvention.component";
import {CurrentStageComponent} from "./front/current-stage/current-stage.component";
import {MyconventionsComponent} from "./front/myconventions/myconventions.component";


const routes: Routes = [
  { path:'front' , component : FrontHomeComponent },
  { path: 'back', component : BackHomeComponent },
  {path : 'convention', component : CenventionComponent},
  {path :'conventionF', component : ConventionComponent},
  {path: 'archiveC', component : ArchiveconventionComponent},
  {path: 'stage', component : CurrentStageComponent},
  {path: 'myconventions', component : MyconventionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
