import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sujet } from '../models/sujet.model';
import { SujetService } from '../sujet.service';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {
  apiUrl: string; // Déclaration de apiUrl

  sujets: Sujet[] = [];
  searchTerm: string = '';
  sujetForm: FormGroup; // Form group for sujet modification
  sujetIndexToEdit: number = -1; // Variable pour stocker l'index du sujet en cours de modification
  message: string = ''; 
  
  
  constructor(private sujetService: SujetService, private router: Router) {
    this.apiUrl = this.sujetService.apiUrl; // Injection de apiUrl depuis le service
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
      this.message = "Suppression effectuée avec succès."; // Afficher le message de confirmation
      this.fetchSujets(); // Rafraîchir la liste des sujets après la suppression
    });
  }


  afficherFormulaireModifier(index: number): void {
    this.sujetIndexToEdit = index;
}


  modifierSujet(sujet: Sujet): void {
    this.sujetService.modifierSujet(sujet.id_Sujet, sujet).subscribe(() => {
        this.sujetIndexToEdit = -1;
        this.message = "Modification effectuée avec succès.";
        setTimeout(() => { this.message = ''; }, 5000);
        this.fetchSujets();
    });
}

ajouterSujet(): void {
  // Naviguer vers le composant sujet-ajout lors du clic sur le bouton
  this.router.navigate(['/sujet-ajout']); // Assurez-vous que '/sujet-ajout' correspond au chemin de votre composant sujet-ajout
}

}
