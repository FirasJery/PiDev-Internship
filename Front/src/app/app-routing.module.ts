import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";

import {CenventionComponent} from "./back/cenvention/cenvention.component";
import {ConventionComponent} from "./front/convention/convention.component";
import {ArchiveconventionComponent} from "./back/archiveconvention/archiveconvention.component";
import {CurrentStageComponent} from "./front/current-stage/current-stage.component";
import {MyconventionsComponent} from "./front/myconventions/myconventions.component";





import {ReclamationComponent} from "./components/Reclamationn/reclamation/reclamation.component";
import {ReclamationListComponent} from "./components/Reclamationn/reclamation-list/reclamation-list.component";
import {ReclamationEditComponent} from "./components/Reclamationn/reclamation-edit/reclamation-edit.component";
import {ReponseComponent} from "./components/Reponsee/reponse/reponse.component";
import {ReponseListComponent} from "./components/Reponsee/reponse-list/reponse-list.component";
import {AuthGuard} from "./guard/auth.guard";
import {UserManagementComponentComponent} from "./back/UserComponents/user-management-component/user-management-component.component";
import {NavBarComponent} from "./back/nav-bar/nav-bar.component";
import {NavBarFrontComponent} from "./front/nav-bar-front/nav-bar-front.component";
import {LoginComponent} from "./login/login.component";
import {ProfileBackComponent} from "./back/UserComponents/profile-back/profile-back.component";
import {UpdateUserComponent} from "./back/UserComponents/update-user/update-user.component";

const routes: Routes = [
  // { path:'' , component : FrontHomeComponent },
  //{ path: 'back', component : BackHomeComponent },
  //{ path: 'reclamation', component : ReclamationComponent }, // add
  //{ path: 'reclamationList', component : ReclamationListComponent },
  { path: 'reponse', component:ReponseComponent},

  { path:'front' , component : FrontHomeComponent },
  { path: 'back', component : BackHomeComponent },


  { path: '', component: LoginComponent },
  { path: 'admins', component: NavBarComponent, canActivate: [AuthGuard], data: { roles: ['SuperAdmin', 'Agentesprit'] },
    children :
  [
    { path: '', component: BackHomeComponent },
    { path: 'add', component: UserManagementComponentComponent },
    { path: 'profile', component: ProfileBackComponent},
    { path : 'update/:email', component: UpdateUserComponent},
    { path: 'reclamationList', component : ReclamationListComponent },
    { path: 'reclamationEdit/:id', component: ReclamationEditComponent },
    { path: 'reponse', component:ReponseComponent},
    { path: 'reponseList', component:ReponseListComponent},
    {path : 'convention', component : CenventionComponent},
    {path: 'archiveC', component : ArchiveconventionComponent},

  ]
  }
  ,
  {
    path: 'user',
    component: NavBarFrontComponent,
    canActivate: [AuthGuard],
    data: {roles: ['etudiant', 'Agententreprise']},
    children:
      [
        {path: '', component: NavBarFrontComponent},
        { path: 'reclamation', component : ReclamationComponent },
        {path :'conventionF', component : ConventionComponent},
        {path: 'myconventions', component : MyconventionsComponent},
        {path: 'stage', component : CurrentStageComponent},


      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
