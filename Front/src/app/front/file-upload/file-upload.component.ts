import { Component } from '@angular/core';
import { FileUploadService } from '../../Services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  selectedDemandeStageFile: File | null = null;
  selectedAttestationFile: File | null = null;
  selectedRapportFile: File | null = null;
  resultMessage: { type: string; result: any } | null = null;

  constructor(private fileUploadService: FileUploadService) { }

  handleFileChange(event: any, type: string): void {
    const file = event.target.files[0];
    switch (type) {
      case 'DEMANDE_STAGE':
        this.selectedDemandeStageFile = file;
        break;
      case 'ATTESTATION':
        this.selectedAttestationFile = file;
        break;
      case 'RAPPORT':
        this.selectedRapportFile = file;
        break;
    }
  }

  async handleUpload(file: File | null, type: string): Promise<void> {
    try {
      if (!file) {
        throw new Error('No file selected');
      }

      const response = await this.fileUploadService.uploadFileToGoogleDrive(file, type).toPromise();

      if (response) {
        this.resultMessage = { type: 'success', result: response };
      } else {
        throw new Error('Upload failed');
      }
    } catch (error: any) {
      console.error('Error uploading file:', error.message);
      this.resultMessage = { type: 'error', result: error.message };
    }
    setTimeout(() => this.resultMessage = null, 5000);
  }
}
