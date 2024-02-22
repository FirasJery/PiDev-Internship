import { Component, OnInit } from '@angular/core';
import { Sujet } from '../models/sujet.model';
import { SujetService } from '../sujet.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sujet-ajout',
  templateUrl: './sujet-ajout.component.html',
  styleUrls: ['./sujet-ajout.component.scss']
})
export class SujetAjoutComponent implements OnInit {
  sujetForm: FormGroup;
  isSujetAdded: boolean = false;
  TypeSujetValues: string[] = [
    'STAGE_FORMATION_HUMAINE_SOCIALE',
    'STAGE_IMMERSION_ENTREPRISE',
    'STAGE_INGENIEUR'
  ];

  constructor(private sujetService: SujetService) {
    this.sujetForm = new FormGroup({
      titre_Sujet: new FormControl('', Validators.required),
      description_Sujet: new FormControl('', Validators.required),
      dure_Sujet: new FormControl('', Validators.required),
      lieu: new FormControl('', Validators.required),
      nbr_etudiant_required: new FormControl('', Validators.required),
      requirements: new FormControl('', Validators.required),
      typeSujet: new FormControl('', Validators.required),
      nomentreprise: new FormControl('', Validators.required),
      mailentreprise: new FormControl('', [Validators.required, Validators.email]),
    });
    
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.sujetForm.valid) {
      this.sujetService.addSujet(this.sujetForm.value).subscribe({
        next: (response) => {
          console.log('Sujet added:', response);
          this.sujetForm.reset();
          this.isSujetAdded = true;
        },
        error: (error) => {
          console.error('Error adding sujet:', error);
        }
      });
    } else {
      console.error('Form is not valid');
    }
  }

}
