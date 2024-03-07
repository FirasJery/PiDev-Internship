import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReponseService} from "../../../Services/ReponseService/reponse.service";

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrl: './reponse.component.css'
})
export class ReponseComponent implements OnInit {
  @Input() message_reponse: string = '';
  reponseForm! : FormGroup;

  constructor(private formBuilder: FormBuilder, private reponseService: ReponseService) {}
  ngOnInit():void {
    this.reponseForm = this.formBuilder.group({
      message_reponse: ['', Validators.required],
    })
  }
  onSubmit(){
    this.reponseService.addReponse(this.reponseForm.value)
      .subscribe(
        response => {
          console.log('Réponse avec succées !', response);
          this.reponseForm.reset();
        },
        error => {
          console.error('Erreur lors de la réponse !', error);
        }
      );
  }
  onDelete(): void {
    this.reponseForm.reset();
  }
}
