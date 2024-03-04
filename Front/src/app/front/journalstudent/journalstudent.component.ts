import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { JournalService } from "../../Services/JournalService/journal.service";
import { Journal } from "../../Modules/JournalModule/Journal.module";
import { TacheJournalService } from "../../Services/TacheJournalService/tachejournal.service";
import { TacheJournal } from "../../Modules/TacheJournalModule/TacheJournal.module";
import {UpdateTacheDialogComponent} from "./update-tache-dialog/update-tache-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AjoutTacheDialogComponent} from "./ajout-tache-dialog/ajout-tache-dialog.component";

@Component({
  selector: 'app-journalstudent',
  templateUrl: './journalstudent.component.html',
  styleUrls: ['./journalstudent.component.css']
})
export class JournalstudentComponent implements OnInit {
  journal: Journal;
  taches: TacheJournal[] = [];
  nouvelleTache: { idtache: 0, descriptiontache: '', date_tache: Date, isValid: false };
  idJournal: number ;
  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService,
    private tacheJournalService: TacheJournalService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // The '+' symbol converts the string to a number
      if (id) {
        this.journalService.findById(id).subscribe({
          next: (journal) => {
            console.log(journal);
            this.journal = journal;
          },
          error: (error) => console.error('There was an error!', error)
        });
        this.tacheJournalService.findAllTachesByIdJournal(id).subscribe({
          next: (src: TacheJournal[]) => {
            console.log(src);

            this.taches = src;
          },
          error: (error) => console.error('There was an error!', error)
        });

      }



    });


  }

  public openDialogUpdate(idTache: number) {
    const dialogRef = this.dialog.open(UpdateTacheDialogComponent, {
      width: '700px',
      height: '640px',
      data: { idTache: idTache }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  /*public openDialogg() {
    const dialogRef = this.dialog.open(AjoutTacheDialogComponent, {
      width: '700px',
      height: '640px',
      data: { nouvelleTache: this.nouvelleTache },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
        this.nouvelleTache = result;
      }
    });
  }*/

  openAjoutTacheDialog(journalId: number) {
    const dialogRef = this.dialog.open(AjoutTacheDialogComponent, {
      width: '500px',
      data: { journalId: journalId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed with success');
        // Refresh your data or perform other actions
      }
    });
  }

}
