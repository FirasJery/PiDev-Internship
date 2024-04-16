import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute and Router
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostulationService } from '../../Services/postulation.service';
import { User } from '../../../models/user.model';
import { Sujet } from '../../../models/sujet.model';

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css']
})
export class PostulationComponent implements OnInit {
  postulationForm!: FormGroup;
  isPostulationAdded: boolean = false;
  idsujet: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private postulationService: PostulationService,
    private route: ActivatedRoute, // Inject ActivatedRoute
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    // Retrieve the subject ID from route parameters
    this.route.params.subscribe(params => {
      this.idsujet = params['idsujet'];
    });

    // Initialize the form with default values
    this.postulationForm = this.formBuilder.group({
      titrecandidature: ['', Validators.required],
      region: ['', Validators.required],
      datedeb: ['', Validators.required],
      datefin: ['', Validators.required],
      lettremotivation: ['', Validators.required],
      comm: ['', Validators.required],
    });
  }

  submitForm(): void {
    console.log('Form controls:', this.postulationForm.controls);
    console.log('Form values:', this.postulationForm.value);
  
    if (this.postulationForm.valid) {
      // Send the form data along with the subject ID to the service
      this.postulationService.addPostulation(this.postulationForm.value, parseInt(this.idsujet, 10)).subscribe(
        (response) => {
          console.log('Postulation added:', response);
          this.postulationForm.reset();
          this.isPostulationAdded = true;
        },
        (error) => {
          console.error('Error adding Postulation:', error);
          // Check if the error message received from the backend indicates an invalid period
          if (error === 'Invalid period') {
            // Display a specific error message to the user
            alert('Invalid period. Please check the start and end dates.');
          } else {
            // Handle other errors if needed
          }
        }
      );
    } else {
      console.error('Form is not valid');
      // Output detailed information about invalid form controls (optional)
    }
  }
  
  
}
