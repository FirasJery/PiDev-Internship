import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";
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
  { path:'' , component : FrontHomeComponent },
  { path: 'back', component : BackHomeComponent },
  { path: 'reclamation', component : ReclamationComponent },
  { path: 'reclamationList', component : ReclamationListComponent },
  { path: 'reclamationEdit/:id', component: ReclamationEditComponent },
  { path: 'reponse', component:ReponseComponent},
  { path: 'reponseList', component:ReponseListComponent},
  { path: '', component: LoginComponent },
  { path: 'admins', component: NavBarComponent, canActivate: [AuthGuard], data: { roles: ['SuperAdmin', 'Agentesprit'] },
    children :
  [
    { path: '', component: BackHomeComponent },
    { path: 'add', component: UserManagementComponentComponent },
    { path: 'profile', component: ProfileBackComponent},
    { path : 'update/:email', component: UpdateUserComponent}
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
        {path: '', component: NavBarFrontComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
