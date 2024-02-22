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
  apiUrl: string;
  sujets: Sujet[] = [];
  searchTerm: string = '';
  sujetForm: FormGroup;
  sujetIndexToEdit: number = -1;
  message: string = ''; 
  selectedSujet: Sujet | null = null;
  updatedSujet: Sujet = new Sujet();

  constructor(private sujetService: SujetService, private router: Router, private formBuilder: FormBuilder) {
    this.apiUrl = this.sujetService.apiUrl;
    
    this.sujetForm = this.formBuilder.group({
      nomentreprise: ['']
    });
  }

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
      this.message = "Suppression effectuée avec succès.";
      this.fetchSujets();
    });
  }

  afficherFormulaireModifier(index: number): void {
    this.sujetIndexToEdit = index;
    this.selectedSujet = this.sujets[index];
    this.updatedSujet = { ...this.selectedSujet };
  }

  modifierSujet(sujet: Sujet): void {
    this.sujetService.updateSujet(sujet).subscribe(() => {
      this.sujetIndexToEdit = -1;
      this.selectedSujet = null;
      this.updatedSujet = new Sujet();
      this.message = "Modification effectuée avec succès.";
    });
  }

  ajouterSujet(): void {
    this.router.navigate(['/sujet-ajout']);
  }
}
