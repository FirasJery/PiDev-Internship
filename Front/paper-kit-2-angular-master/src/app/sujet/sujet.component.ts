import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sujet } from '../models/sujet.model';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.scss']
})
export class SujetComponent implements OnInit {

  sujets: Sujet[] = [];
  searchTerm: string = '';

  constructor(private sujetService: SujetService) { }

  ngOnInit(): void {
    this.fetchSujets();
  }

  fetchSujets(searchTerm?: string): void {
    // Call the service method with searchTerm as the second parameter
    this.sujetService.getAllSujets('mailentreprise', searchTerm || this.searchTerm)
      .subscribe(sujets => {
        console.log(sujets); // Log the received data
        this.sujets = sujets;
      });
  }
  
  onSearch(): void {
    // Call fetchSujets method again with the searchTerm when search button is clicked
    this.fetchSujets(); // No need to pass the searchTerm here
  }
}
