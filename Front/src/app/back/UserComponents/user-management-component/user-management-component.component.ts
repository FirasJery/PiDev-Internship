import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../../../Services/UserService/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-management-component',
  templateUrl: './user-management-component.component.html',
  styleUrl: './user-management-component.component.css'
})
export class UserManagementComponentComponent implements OnInit{

  message: string = "";
  userForm: FormGroup;
  showRoleEntrepriseFields = false;
  showEtudiantFields = false;
  constructor(private UserService: UserServiceService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.userForm = this.fb.group({});
  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      login: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      role: ['', Validators.required],
      roleEntreprise: [''],
      identifiant: [''],
      classe: [''],
      specialite: ['']
    });

    // Subscribe to role control value changes
    // @ts-ignore
    this.userForm.get('role').valueChanges.subscribe(value => {
      this.toggleFields(value);
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      // Handle form submission
      console.log(this.userForm.value);
    } else {
      // Display error messages or handle invalid form
      console.log('Form is invalid');
    }
  }

  toggleFields(role: string): void {
    this.showRoleEntrepriseFields = role === 'Agent-entreprise';
    this.showEtudiantFields = role === 'Etudiant';
  }
  addUser()
  {
    this.message = this.UserService.adduser();
  }

}
