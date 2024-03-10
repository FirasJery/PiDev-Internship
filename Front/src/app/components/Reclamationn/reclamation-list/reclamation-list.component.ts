import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
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
export class ReclamationListComponent implements OnInit, PipeTransform {
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
  searchValue: string = '';
  suggestions: any[] = [];


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
    this.router.navigate(['admins/reclamationEdit', id]);
  }

  goToReponse(): void {
    this.router.navigate(['/reponse'], { relativeTo: this.route });
  }
  @Pipe({ name: 'searchReclamations' })
  searchReclamations(reclamations: any[], searchValue: string): any[] {
    if (!searchValue) {
      return reclamations;
    }
    return reclamations.filter(reclamation => reclamation.title.toLowerCase().includes(searchValue.toLowerCase()));
  }

  searchReclamationsWithSuggestions(searchValue: string): any[] {
    if (!searchValue) {
      return this.reclamations; // Return all reclamations if no search term
    }

    // Filter based on title similarity (you can customize this logic)
    const suggestions = this.reclamations.filter(reclamation =>
      reclamation.title.toLowerCase().startsWith(searchValue.toLowerCase())
    );

    // Limit the number of suggestions (optional)
    return suggestions.slice(0, 5); // Display only the first 5 suggestions
  }
  getSuggestions() {
    this.suggestions = this.searchReclamationsWithSuggestions(this.searchValue);
  }

  transform(value: any, ...args: any[]): any {
  }
}
