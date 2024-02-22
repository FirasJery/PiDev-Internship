import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {AdminLayoutModule} from "./layouts/admin-layout/admin-layout.module";
import { ConventionComponent } from './convention/convention.component';
import { SujetModificationComponent } from './sujet-modification/sujet-modification.component';
import { SujetAjoutComponent } from './sujet-ajout/sujet-ajout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AdminLayoutModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ConventionComponent,
    SujetModificationComponent,
    SujetAjoutComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
