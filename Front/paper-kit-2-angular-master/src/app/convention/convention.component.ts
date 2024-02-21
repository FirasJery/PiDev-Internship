import { Component, OnInit } from '@angular/core';
import { Convention } from '../models/convention.model';
import { ConventionService } from '../convention.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-convention',
  templateUrl: './convention.component.html',
  styleUrls: ['./convention.component.scss']
})
export class ConventionComponent implements OnInit {
  conventionForm: FormGroup;
  isConventionAdded: boolean = false;

  constructor(private conventionService: ConventionService) {
    this.conventionForm = new FormGroup({
      nom_entreprise: new FormControl('', Validators.required),
      date_debut: new FormControl('', Validators.required),
      date_fin: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      num_tel: new FormControl('', [Validators.required, Validators.pattern(/^(\+216)?[2-9]\d{7}$/)]),
      nom_encadrant: new FormControl('', Validators.required),
      email_encadrant: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
  }
  submitForm() {
    if (this.conventionForm.valid) {
      this.conventionService.addConvention(this.conventionForm.value).subscribe({
        next: (response) => {
          console.log('Convention added:', response);
          this.conventionForm.reset();
          this.isConventionAdded = true;
        },
        error: (error) => {
          console.error('Error adding convention:', error);
        }
      });
    } else {
      console.error('Form is not valid');
    }
  }

}
