import { Component } from '@angular/core';
import {Convention} from "../../Modules/ConventionModule/Convention.module";
import {ConventionService} from "../../Services/ConventionService/convention.service";
import {Stage} from "../../Modules/StageModule/Stage.module";

@Component({
  selector: 'app-current-stage',
  templateUrl: './current-stage.component.html',
  styleUrl: './current-stage.component.css'
})
export class CurrentStageComponent {
  stage: Stage[] = [];

  constructor(private conventionService: ConventionService) { }

  ngOnInit(): void {
    const userId = 1; // Replace with the actual user ID
    this.conventionService.getStageByUser(userId).subscribe(stage => {
      this.stage = stage;
    });
  }
  onFileSelected(event: any, stage: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      stage.selectedFile = file; // Temporarily hold selected file in stage object
    }
  }

  uploadFile(stage: any) {
    if (stage.selectedFile) {
      const formData = new FormData();
      formData.append('file', stage.selectedFile);

      this.conventionService.uploadStageReport(stage.idStage, formData).subscribe({
        next: (response) => {
          console.log('file uploaded successfully', response);
          stage.nom_fichier_rapport = response.filePath; // Update the path after successful upload
          console.log(stage)

        },
        error: (error) => console.error('Error uploading file:', error)
      });
    }
  }
}
