import {Component, OnInit} from '@angular/core';
import {ReclamationService} from "../../../Services/ReclamationService/reclamation-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrl: './reclamation-list.component.css'
})
export class ReclamationListComponent implements OnInit {
  reclamations: any[] = [];

  constructor(private reclamationService: ReclamationService, private router: Router) { }

  ngOnInit(): void {
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
          // Rechargez la liste des réclamations après la suppression
          this.fetchReclamations();
        },
        (error: any) => {
          console.error('Erreur lors de la suppression de la réclamation : ', error);
        }
      );
    }
  }
  goToEditReclamation(id: number): void {
    this.router.navigate(['/modifier-reclamation', id]);
  }
}
