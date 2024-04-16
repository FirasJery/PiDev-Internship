import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontHomeComponent } from './front/front-home/front-home.component';
import { BackHomeComponent } from './back/back-home/back-home.component';
import { CenventionComponent } from './back/cenvention/cenvention.component';
import { ConventionComponent } from './front/convention/convention.component';
import { ArchiveconventionComponent } from './back/archiveconvention/archiveconvention.component';
import { CurrentStageComponent } from './front/current-stage/current-stage.component';
import { MyconventionsComponent } from './front/myconventions/myconventions.component';
import { ReclamationComponent } from './components/Reclamationn/reclamation/reclamation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {ReponseComponent} from './components/Reponsee/reponse/reponse.component';
import {ReclamationListComponent} from './components/Reclamationn/reclamation-list/reclamation-list.component';
import {ReclamationEditComponent} from './components/Reclamationn/reclamation-edit/reclamation-edit.component';
import {ReponseListComponent} from './components/Reponsee/reponse-list/reponse-list.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {UserManagementComponentComponent} from './back/UserComponents/user-management-component/user-management-component.component';
import {ProfileBackComponent} from './back/UserComponents/profile-back/profile-back.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UpdateUserComponent} from './back/UserComponents/update-user/update-user.component';
import {LoginComponent} from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavBarComponent} from './back/nav-bar/nav-bar.component';
import {NavBarFrontComponent} from './front/nav-bar-front/nav-bar-front.component';
import {SujetComponent} from './front/sujet/sujet.component';
import {HttpClientModule} from '@angular/common/http';
import {SujetAjoutComponent} from './back/sujet-ajout/sujet-ajout.component';
import {SujetAfficherComponent} from './back/sujet-afficher/sujet-afficher.component';
import {PostulationComponent} from './front/postulation/postulation.component';
import {AffichPostulationComponent} from './front/affich-postulation/affich-postulation.component';
import {PostulationValiderComponent} from './back/postulation-valider/postulation-valider.component';
import {PostulatiionSujetComponent} from './back/postulatiion-sujet/postulatiion-sujet.component';
import { PostComponent } from './back/post/post.component';
import { PostfComponent } from './front/postf/postf.component';
import { MypostsComponent } from './front/myposts/myposts.component';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'GestionStageRealm',
        clientId: 'Front-end',
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
      },
      bearerExcludedUrls: ['/assets'],
    });

}
@NgModule({
  declarations: [
    AppComponent,
    FrontHomeComponent,
    BackHomeComponent,
    LoginComponent,
    NavBarComponent,
    NavBarFrontComponent,
    CenventionComponent,
    ConventionComponent,
    ArchiveconventionComponent,
    CurrentStageComponent,
    MyconventionsComponent,
    ReclamationComponent,
    ReponseComponent,
    ReclamationListComponent,
    ReclamationEditComponent,
    ReponseListComponent,
    NavBarFrontComponent,
    UserManagementComponentComponent,
    LoginComponent,
    ProfileBackComponent,
    UpdateUserComponent,
    LoginComponent,
    NavBarComponent,
    NavBarFrontComponent,
    SujetComponent,
    SujetAjoutComponent,
    SujetAfficherComponent,
    PostulationComponent,
    AffichPostulationComponent,
    PostulationValiderComponent,
    PostulatiionSujetComponent,
    PostComponent,
    PostfComponent,
    MypostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormField,
    KeycloakAngularModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
