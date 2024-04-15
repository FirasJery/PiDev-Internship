import { Component } from '@angular/core';
import { FileUploadService } from '../../Services/file-upload.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  selectedFile: File | null = null;
  resultMessage: { type: string; result: any } | null = null;

  constructor(private fileUploadService: FileUploadService) { }

  handleFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  async handleUpload(): Promise<void> {
    try {
      if (!this.selectedFile) {
        throw new Error('No file selected');
      }

      const response = await this.fileUploadService.uploadFileToGoogleDrive(this.selectedFile).toPromise();

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
