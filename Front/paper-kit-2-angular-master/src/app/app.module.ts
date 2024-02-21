import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { ConventionComponent } from './convention/convention.component';
import {HttpClientModule} from "@angular/common/http";
import { ForumComponent } from './forum/forum.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { JournalComponent } from './journal/journal.component';
import { SujetComponent } from './sujet/sujet.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConventionComponent,
    ForumComponent,
    ReclamationComponent,
    JournalComponent,
    SujetComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
