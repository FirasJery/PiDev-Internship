import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sujet } from '../models/sujet.model';
import { SujetService } from '../sujet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {

  sujets: Sujet[] = [];
  searchTerm: string = '';
  sujetForm: FormGroup; // Form group for sujet modification
  showModifyModal: boolean = false; // Flag to control the display of the modification modal
  message: string = ''; 
  constructor(private sujetService: SujetService) { }


  

  ngOnInit(): void {
    this.fetchSujets();
  
  }
  

  fetchSujets(searchTerm?: string): void {
    this.sujetService.getAllSujets('mailentreprise', searchTerm || this.searchTerm)
      .subscribe(sujets => {
        this.sujets = sujets;
      });
  }

  supprimerSujet(idSujet: number): void {
    this.sujetService.supprimerSujet(idSujet).subscribe(() => {
      this.message = "Suppression effectuée avec succès."; // Afficher le message de confirmation
      this.fetchSujets(); // Rafraîchir la liste des sujets après la suppression
    });
  }
}
