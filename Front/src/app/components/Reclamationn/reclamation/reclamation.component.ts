import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ReclamationService } from "../../../Services/ReclamationService/reclamation-service.service";

interface TypeReclamation {
  type: string;
}

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  typeControl = new FormControl<TypeReclamation | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  typeReclamation: TypeReclamation[] = [
    { type: 'ANNULATION' },
    { type: 'MODIFICATION' },
    { type: 'AUTRES' }
  ];
  @Input() title: string = '';
  @Input() description_Reclamation: string = '';
  reclamationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.reclamationForm = this.formBuilder.group({
      title: ['', Validators.required],
      typeReclamation: ['', Validators.required],
      description_Reclamation: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.reclamationForm.valid) {
      const newReclamation = {
        title: this.reclamationForm.value.title,
        typeReclamation: this.reclamationForm.value.typeReclamation,
        description_Reclamation: this.reclamationForm.value.description_Reclamation,
        statut: 'EN_ATTENTE' // Par défaut, le statut est en attente
      };

      this.reclamationService.addReclamation(newReclamation)
        .subscribe(
          response => {
            console.log('Réclamation créée avec succès !', response);
            this.reclamationForm.reset();
          },
          error => {
            console.error('Erreur lors de la création de la réclamation : ', error);
          }
        );
    }
  }

  onDelete(): void {
    this.reclamationForm.reset();
  }
}
