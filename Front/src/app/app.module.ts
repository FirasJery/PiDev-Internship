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
import { JournalComponent } from './back/journal/journal.component';
import { JournalstudentComponent } from './front/journalstudent/journalstudent.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdateTacheDialogComponent } from './front/journalstudent/update-tache-dialog/update-tache-dialog.component';
import { AjoutTacheDialogComponent } from './front/journalstudent/ajout-tache-dialog/ajout-tache-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { GrilleComponent } from './back/grille/grille.component';
import { AjoutGrilleDialogComponent } from './back/grille/ajout-grille-dialog/ajout-grille-dialog.component';
import { UpdateGrilleDialogComponent } from './back/grille/update-grille-dialog/update-grille-dialog.component';
import { JournalencadrantComponent } from './front/journalencadrant/journalencadrant.component';
import { DetailsJournalComponent } from './front/details-journal/details-journal.component';
import { GrilleDetailComponent } from './front/details-journal/grille-detail/grille-detail.component';



@NgModule({
    declarations: [
        AppComponent,
        FrontHomeComponent,
        BackHomeComponent,
        LoginComponent,
        NavBarComponent,
        NavBarFrontComponent,
        JournalComponent,
        JournalstudentComponent,
        UpdateTacheDialogComponent,
        AjoutTacheDialogComponent,
        GrilleComponent,
        AjoutGrilleDialogComponent,
        UpdateGrilleDialogComponent,
        JournalencadrantComponent,
        DetailsJournalComponent,
        GrilleDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserModule,
        HttpClientModule,
        MatDialogModule,
        FormsModule,
        MatFormField,
        MatOption,
        MatSelect,

        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule

    ],
    providers: [],
    exports: [
        GrilleComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
