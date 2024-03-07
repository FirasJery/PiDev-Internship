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
import { CenventionComponent } from './back/cenvention/cenvention.component';
import {HttpClientModule} from "@angular/common/http";
import { ConventionComponent } from './front/convention/convention.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ArchiveconventionComponent } from './back/archiveconvention/archiveconvention.component';
import { CurrentStageComponent } from './front/current-stage/current-stage.component';
import { MyconventionsComponent } from './front/myconventions/myconventions.component';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
