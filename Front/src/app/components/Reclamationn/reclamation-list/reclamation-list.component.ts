import { Component, OnInit } from '@angular/core';
import { ReclamationService } from "../../../Services/ReclamationService/reclamation-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface TypeStatut {
  type: string;
}

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {
  typeControl = new FormControl<TypeStatut | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  typeReclamation: TypeStatut[] = [
    { type: 'EN_ATTENTE' },
    { type: 'APPROUVE' },
    { type: 'REJETE' },
    { type: 'A_LETUDE' }
  ];
  reclamations: any[] = [];
  reclamationListForm!: FormGroup;
  isLoading: boolean = false;
  selectedReclamations: any[] = [];

  constructor(private reclamationService: ReclamationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reclamationListForm = new FormGroup({
      Statut_reclamation: new FormControl('', Validators.required)
    });
    this.fetchReclamations();
  }

  fetchReclamations(): void {
    this.reclamationService.findAll()
      .subscribe(
        reclamations => {
          this.reclamations = reclamations;
        },
        error => {
          console.error('Erreur lors de la récupération des réclamations : ', error);
        }
      );
  }

  deleteReclamation(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette réclamation ?')) {
      this.reclamationService.deleteReclamation(id).subscribe(
        () => {
          console.log('Réclamation supprimée avec succès !');
          this.fetchReclamations();
        },
        (error: any) => {
          console.error('Erreur lors de la suppression de la réclamation : ', error);
        },
      );
    }
  }

  goToEditReclamation(id: number): void {
    this.router.navigate(['/reclamationEdit', id]);
  }

  goToReponse(): void {
    this.router.navigate(['/reponse'], { relativeTo: this.route });
  }
}
