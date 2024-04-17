import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sujet } from '../../../models/sujet.model';
  import { SujetService } from '../../Services/sujet.service';
  import { Router } from '@angular/router';


@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.scss']
})
export class SujetComponent implements OnInit {

  sujets: Sujet[] = [];
  searchTerm: string = '';
  filterOption: string = '';
  idadmin : number = 11;
  constructor(private sujetService: SujetService, private router: Router) { }

  ngOnInit(): void {
    this.fetchSujets();
  }

  fetchSujets(searchTerm?: string): void {
    // Call the service method with searchTerm as the second parameter
    this.sujetService.getAllSujetsf()
      .subscribe(sujets => {
        console.log(sujets); // Log the received data
        this.sujets = sujets;
      });
  }

  onSearch(): void {
    // Call fetchSujets method again with the searchTerm when search button is clicked
    this.fetchSujets(); // No need to pass the searchTerm here
  }

  search(): void {
    this.sujetService.searchSujets(this.searchTerm)
      .subscribe(results => {
        this.sujets = results;
      });
  }


  fetchData(): void {
    // Fetch data based on filter option
    if (this.filterOption === 'nbreEtudiantDesc') {
      this.sujetService.filterByNbretudiantDescending()
        .subscribe(sujets => this.sujets = sujets);
    } else if (this.filterOption === 'nbreEtudiantAsc') {
      this.sujetService.filterByNbretudiantAscending()
        .subscribe(sujets => this.sujets = sujets);
    }else if (this.filterOption === 'dureeStageDesc') {
      this.sujetService.filterByDureeDescending()
        .subscribe(sujets => this.sujets = sujets);
    } else if (this.filterOption === 'dureeStageAsc') {
      this.sujetService.filterByDureeAscending()
        .subscribe(sujets => this.sujets = sujets);
    } else {
      // Fetch all subjects if no filter option selected
      this.sujetService.getSujets()
        .subscribe(sujets => this.sujets = sujets);
    }
  }

  applyFilter(): void {
    // Fetch data when filter option changes
    this.fetchData();
  }

  postuler(idsujet: number): void {
    this.router.navigate(['/user/postuler', idsujet]);
  }


}
