import { Component, OnInit } from '@angular/core';
import { Postulation } from '../../../models/postulation.model';
import { PostulationService } from '../../Services/postulation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postulation-valider',
  templateUrl: './postulation-valider.component.html',
  styleUrls: ['./postulation-valider.component.css']
})
export class PostulationValiderComponent implements OnInit {
  postulations: Postulation[] = [];
  filterOption: string = '';
  idadmin : number = 11; 

  constructor(private postulationService: PostulationService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPostulations();
  }

  
  fetchPostulations(searchTerm?: string): void {
    this.postulationService.getPostulationsAttente(this.idadmin )
      .subscribe(postulations => {
        console.log(postulations);
        this.postulations = postulations;
      });
  }
  

  applyFilter(): void {
    this.fetchData(this.filterOption);
  }



  fetchData(filterOption: string): void {
    if (filterOption === 'attente') {
      this.postulationService.filterByAttente()
        .subscribe(postulations => {
          // Filter the postulations to keep only those with status = 0
          this.postulations = postulations.filter(postulation => postulation.status === 0);
        });
    }
  }
  
  
  
  confirmPostulation(postulation: Postulation): void {
    // Call the service method to confirm the postulation
    this.postulationService.confirmPostulation(postulation, this.idadmin )
      .subscribe(() => {
        // If successful, update the postulations list
        this.fetchPostulations();
      });
  }
  

  rejectPostulation(postulation: Postulation): void {
    // Call the service method to reject the postulation
    this.postulationService.rejectPostulation(postulation , this.idadmin )
      .subscribe(() => {
        // If successful, update the postulations list
        this.fetchPostulations();
      });
  }
  
}
