import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontHomeComponent } from './front/front-home/front-home.component';
import { BackHomeComponent } from './back/back-home/back-home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './back/nav-bar/nav-bar.component';
import { NavBarFrontComponent } from './front/nav-bar-front/nav-bar-front.component';
import { SujetComponent } from './front/sujet/sujet.component';
import { HttpClientModule } from '@angular/common/http';
import { SujetAjoutComponent } from './back/sujet-ajout/sujet-ajout.component';
import { SujetAfficherComponent } from './back/sujet-afficher/sujet-afficher.component';
import { PostulationComponent } from './front/postulation/postulation.component';
import { AffichPostulationComponent } from './front/affich-postulation/affich-postulation.component';
import { PostulationValiderComponent } from './back/postulation-valider/postulation-valider.component';
import { PostulatiionSujetComponent } from './back/postulatiion-sujet/postulatiion-sujet.component'; 


@NgModule({
  declarations: [
    AppComponent,
    FrontHomeComponent,
    BackHomeComponent,
    LoginComponent,
    NavBarComponent,
    NavBarFrontComponent,
    SujetComponent,
    SujetAjoutComponent,
    SujetAfficherComponent,
    PostulationComponent,
    AffichPostulationComponent,
    PostulationValiderComponent,
    PostulatiionSujetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
