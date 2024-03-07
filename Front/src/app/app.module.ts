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
import { PostComponent } from './back/post/post.component';
import { PostfComponent } from './front/postf/postf.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MypostsComponent } from './front/myposts/myposts.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontHomeComponent,
    BackHomeComponent,
    LoginComponent,
    NavBarComponent,
    NavBarFrontComponent,
    PostComponent,
    PostfComponent,
    MypostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
