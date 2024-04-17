import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Journal} from "../../../Modules/JournalModule/Journal.module";
import {Appreciation, Evaluation} from "../../../Modules/EvaluationModule/Evaluation.module";
import {JournalService} from "../../../Services/JournalService/journal.service";
import {EvaluationService} from "../../../Services/EvaluationService/evaluation.service";
import {TacheJournalService} from "../../../Services/TacheJournalService/tachejournal.service";
import {MatDialog} from "@angular/material/dialog";
import {TacheJournal} from "../../../Modules/TacheJournalModule/TacheJournal.module";


@Component({
  selector: 'app-grille-detail',
 templateUrl: './grille-detail.component.html',
  styleUrl: './grille-detail.component.css'
})
export class GrilleDetailComponent implements OnInit{

  journal: Journal;
  idJournal: number ;
  evals: Evaluation[]=[];
  appreciationOptions: string[];


  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService,
    private evaluationService: EvaluationService

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
        this.evaluationService.findAllEvaluationsByIdJournal(id).subscribe({
          next: (src: Evaluation[]) => {
            console.log(src);

            this.evals = src;
          },
          error: (error) => console.error('There was an error!', error)
        });

      }



    });
    this.appreciationOptions = Object.values(Appreciation);

  }

  protected readonly Appreciation = Appreciation;

  updateEvaluation(idEvaluation: number, evaluation: Evaluation) {
    this.evaluationService.updateEvaluation(idEvaluation, evaluation).subscribe(
      updatedJournal => {
        // Handle successful update here
        console.log('Evaluation updated successfully:', updatedJournal);
      },
      error => {
        // Handle error here
        console.error('Error updating evaluation:', error);
      }
    );
  }
}
