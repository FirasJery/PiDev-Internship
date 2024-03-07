import { Component, OnInit } from '@angular/core';
import { SujetService } from '../../Services/sujet.service';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor(private sujetService: SujetService,private router: Router,) {
    this.sujetForm = new FormGroup({
      titre: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duree: new FormControl('', Validators.required),
      lieu: new FormControl('', Validators.required),
      nbretudiant: new FormControl('', Validators.required),
      requirements: new FormControl('', Validators.required),
      typesujet: new FormControl('', Validators.required),
      nomentreprise: new FormControl('', Validators.required),
      mailentreprise: new FormControl('', [Validators.required, Validators.email]),
    });

    // Watch for changes in the typesujet control and update validators accordingly
    this.sujetForm.get('typesujet')?.valueChanges.subscribe((value) => {
      const validators = validatorsByType[value];
  
    });
}


  ngOnInit(): void {
  }

  submitForm() {
    if (this.sujetForm.valid) {
      console.log('Form is valid:', this.sujetForm.value);
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
      // Output detailed information about invalid form controls
      Object.keys(this.sujetForm.controls).forEach(field => {
        const control = this.sujetForm.get(field);
        console.log(field, control?.errors);
      });
    }
  } 


  afficherSujet(): void {
    this.router.navigate(['/affichsujet']);
  }
}

const validatorsByType: { [key: string]: ValidatorFn | null } = {
  STAGE_FORMATION_HUMAINE_SOCIALE: Validators.compose([
    Validators.required,
  ]),
  STAGE_IMMERSION_ENTREPRISE: Validators.compose([
    Validators.required,
  ]),
  STAGE_INGENIEUR: Validators.compose([
    Validators.required,
  ]),
};
