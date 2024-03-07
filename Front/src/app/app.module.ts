import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontHomeComponent } from './front/front-home/front-home.component';
import { BackHomeComponent } from './back/back-home/back-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './back/nav-bar/nav-bar.component';
import { NavBarFrontComponent } from './front/nav-bar-front/nav-bar-front.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { UserManagementComponentComponent } from './back/UserComponents/user-management-component/user-management-component.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileBackComponent } from './back/UserComponents/profile-back/profile-back.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateUserComponent } from './back/UserComponents/update-user/update-user.component';


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
    NavBarComponent,
    NavBarFrontComponent,
    UserManagementComponentComponent,
    LoginComponent,
    ProfileBackComponent,
    UpdateUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    KeycloakAngularModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ // Configure Toastr globally
      timeOut: 3000, // Set default timeout for notifications in milliseconds
      positionClass: 'toast-top-right', // Set default position
      preventDuplicates: true, // Prevent duplicate notifications
      progressBar: true // Display a progress bar
    }),
    BrowserAnimationsModule

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
