import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConventionService } from '../../Services/ConventionService/convention.service';

@Component({
  selector: 'app-convention',
  templateUrl: './convention.component.html',
  styleUrls: ['./convention.component.css']
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
    this.subscribeToFormChanges();
  }

  subscribeToFormChanges(): void {
    // Example: Subscribe to changes in 'nom_entreprise' field
    this.conventionForm.get('nom_entreprise')?.valueChanges.subscribe(value => {
      console.log('Nom de l\'entreprise changed:', value);
      // Perform any action based on the new value
    });

    // Add more subscriptions as needed for other fields
  }

  submitForm() {
    // Hard-code the userId value here
    const userId = 1; // Example userId, change this to the actual userId you need

    if (this.conventionForm.valid) {
      this.conventionService.addConventionAndAssignToUser(this.conventionForm.value, userId).subscribe({
        next: (response) => {
          console.log('Convention added and assigned to user:', response);
          this.conventionForm.reset();
          this.isConventionAdded = true;
        },
        error: (error) => {
          console.error('Error adding and assigning convention:', error);
        }
      });
    } else {
      console.error('Form is not valid');
    }
  }
}
