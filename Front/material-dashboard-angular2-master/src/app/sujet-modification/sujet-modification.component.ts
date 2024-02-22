import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sujet } from '../models/sujet.model';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-sujet-modification',
  templateUrl: './sujet-modification.component.html',
  styleUrls: ['./sujet-modification.component.css']
})
export class SujetModificationComponent implements OnInit {
  sujet: Sujet;
  sujetForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private sujetService: SujetService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.sujetService.getSujetById(id).subscribe(sujet => {
        this.sujet = sujet;
        this.initializeForm();
      });
    });
  }

  initializeForm(): void {
    this.sujetForm = this.fb.group({
      titre_Sujet: [this.sujet.titre_Sujet],
      description_Sujet: [this.sujet.description_Sujet],
      dure_Sujet: [this.sujet.dure_Sujet],
      lieu: [this.sujet.lieu],
      nbr_etudiant_required: [this.sujet.nbr_etudiant_required],
      requirements: [this.sujet.requirements],
      typeSujet: [this.sujet.typeSujet],
      nomentreprise: [this.sujet.nomentreprise],
      mailentreprise: [this.sujet.mailentreprise]
    });
  }

  onSubmit(): void {
    if (this.sujetForm.valid) {
      const updatedSujet: Sujet = {
        ...this.sujet,
        titre_Sujet: this.sujetForm.value.titre_Sujet,
        description_Sujet: this.sujetForm.value.description_Sujet,
        dure_Sujet: this.sujetForm.value.dure_Sujet,
        lieu: this.sujetForm.value.lieu,
        nbr_etudiant_required: this.sujetForm.value.nbr_etudiant_required,
        requirements: this.sujetForm.value.requirements,
        typeSujet: this.sujetForm.value.typeSujet,
        nomentreprise: this.sujetForm.value.nomentreprise,
        mailentreprise: this.sujetForm.value.mailentreprise
      };

      this.sujetService.updateSujet(updatedSujet).subscribe(
        (updatedSujet: Sujet) => {
          // Handle success
          console.log('Subject updated successfully:', updatedSujet);
          // Optionally, navigate to a success page or display a success message
        },
        error => {
          // Handle error
          console.error('Error updating subject:', error);
          // Optionally, display an error message to the user
        }
      );
    } else {
      // Form is invalid, display error or handle accordingly
      console.error('Form is invalid');
    }
  }



}
