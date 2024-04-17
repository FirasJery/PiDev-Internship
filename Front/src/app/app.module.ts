import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontHomeComponent } from './front/front-home/front-home.component';
import { BackHomeComponent } from './back/back-home/back-home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './back/nav-bar/nav-bar.component';
import { NavBarFrontComponent } from './front/nav-bar-front/nav-bar-front.component';
import { ReclamationComponent } from './components/Reclamationn/reclamation/reclamation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClientModule} from "@angular/common/http";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { ReponseComponent } from './components/Reponsee/reponse/reponse.component';
import { ReclamationListComponent } from './components/Reclamationn/reclamation-list/reclamation-list.component';
import { ReclamationEditComponent } from './components/Reclamationn/reclamation-edit/reclamation-edit.component';
import { ReponseListComponent } from './components/Reponsee/reponse-list/reponse-list.component';
import { ReclamationStatistiqueComponent } from './components/Reclamationn/reclamation-statistique/reclamation-statistique.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReclamationEditUserComponent } from './components/Reclamationn/reclamation-edit-user/reclamation-edit-user.component';
import { ReclamationListUserComponent } from './components/Reclamationn/reclamation-list-user/reclamation-list-user.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontHomeComponent,
    BackHomeComponent,
    LoginComponent,
    NavBarComponent,
    NavBarFrontComponent,
    ReclamationComponent,
    ReponseComponent,
    ReclamationListComponent,
    ReclamationEditComponent,
    ReponseListComponent,
    ReclamationStatistiqueComponent,
    ReclamationEditUserComponent,
    ReclamationListUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormField,
    NgxChartsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
