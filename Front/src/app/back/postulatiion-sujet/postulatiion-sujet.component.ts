import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Postulation } from '../../../models/postulation.model';
import { PostulationService } from '../../Services/postulation.service';

@Component({
  selector: 'app-postulatiion-sujet',
  templateUrl: './postulatiion-sujet.component.html',
  styleUrls: ['./postulatiion-sujet.component.css']
})
export class PostulatiionSujetComponent implements OnInit {

  postulations: Postulation[] = [];
  filterOption: string = '';
  idsujet: string = ''; // Change type to string to match the type in PostulationComponent

  constructor(private route: ActivatedRoute, private postulationService: PostulationService) { }

  ngOnInit(): void {
    // Retrieve idsujet from route parameters
    this.route.params.subscribe(params => {
      this.idsujet = params['idsujet'];
      this.fetchData('attente', +this.idsujet);
    });
  }

  fetchPostulations(searchTerm?: string): void {
    this.postulationService.filterByAttenteAndSujet(+this.idsujet)
      .subscribe(postulations => {
        console.log('Fetched postulations:', postulations);
        this.postulations = postulations.filter(postulation => postulation.status === 0);
        console.log('Filtered postulations:', this.postulations);
      });
  }
  


  // + to convert idsujet from string to a number
  applyFilter(): void {
    this.fetchData(this.filterOption, +this.idsujet);
  }
  
  fetchData(filterOption: string, sujetId: number): void {
    if (filterOption === 'attente') {
      this.postulationService.filterByAttenteAndSujet(sujetId)
        .subscribe(postulations => {
          this.postulations = postulations.filter(postulation => postulation.status === 0);
        });
    }
  }

  confirmPostulation(postulation: Postulation): void {
    this.postulationService.confirmPostulation(postulation)
      .subscribe(() => {
        this.fetchPostulations();
        this.sendEmail(postulation);
      });
  }

  rejectPostulation(postulation: Postulation): void {
    this.postulationService.rejectPostulation(postulation)
      .subscribe(() => {
        this.fetchPostulations();
        this.sendEmail(postulation);
      });
  }


  sendEmail(postulation: Postulation): void {}

  
}
