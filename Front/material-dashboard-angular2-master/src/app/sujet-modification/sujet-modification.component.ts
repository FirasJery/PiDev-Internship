import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sujet } from '../models/sujet.model';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-sujet-modification',
  templateUrl: './sujet-modification.component.html',
  styleUrls: ['./sujet-modification.component.css']
})
export class SujetModificationComponent implements OnInit {
  sujet: Sujet;
  sujetForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private sujetService: SujetService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.sujetService.getSujetById(id).subscribe(sujet => {
        this.sujet = sujet;
        this.initializeForm();
      });
    });
  }

  initializeForm(): void {
    
  }

  onSubmit(): void {
    if (this.sujetForm.valid) {
      
      };

     
  }



}
