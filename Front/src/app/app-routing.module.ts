import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";
import {AuthGuard} from "./guard/auth.guard";
import {UserManagementComponentComponent} from "./back/user-management-component/user-management-component.component";
import {NavBarComponent} from "./back/nav-bar/nav-bar.component";
import {NavBarFrontComponent} from "./front/nav-bar-front/nav-bar-front.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admins', component: NavBarComponent, canActivate: [AuthGuard], data: { roles: ['Super-Admin', 'Agent-esprit'] },
    children :
  [
    { path: '', component: BackHomeComponent },
    { path: 'add', component: UserManagementComponentComponent }
  ]
  }
  ,
  {
    path: 'user',
    component: NavBarFrontComponent,
    canActivate: [AuthGuard],
    data: {roles: ['etudiant', 'Agent-entreprise']},
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
