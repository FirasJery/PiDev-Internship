import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConventionService } from '../../Services/ConventionService/convention.service';
import {UserServiceService} from "../../Services/UserService/user-service.service";

@Component({
  selector: 'app-convention',
  templateUrl: './convention.component.html',
  styleUrls: ['./convention.component.css']
})
export class ConventionComponent implements OnInit {
  conventionForm: FormGroup;
  isConventionAdded: boolean = false;
  email : string  = '';
  idUser : number=0;

  constructor(private conventionService: ConventionService, private UserService: UserServiceService) {
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
    this.getCurrentUser();

  }

  subscribeToFormChanges(): void {
    // Example: Subscribe to changes in 'nom_entreprise' field
    this.conventionForm.get('nom_entreprise')?.valueChanges.subscribe(value => {
      console.log('Nom de l\'entreprise changed:', value);
      // Perform any action based on the new value
    });

    // Add more subscriptions as needed for other fields
  }

  getCurrentUser() {
    this.UserService.getCurrentUser()
      .then(userInfo => {
        this.email = userInfo.email;
        console.log(this.email);

        this.UserService.getUserWarpperByEmail(this.email).subscribe(user => {
          this.idUser = user.user.id_User;
          console.log("responce   "+  this.idUser);

        });

      })
      .catch(error => {
        console.error(error); // Handle errors here
      });
  }
  submitForm() {
    // Hard-code the userId value here

    if (this.conventionForm.valid) {
      console.log(this.idUser);
      this.conventionService.addConventionAndAssignToUser(this.conventionForm.value, this.idUser).subscribe({
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
