import { Component } from '@angular/core';
import {Convention} from "../../Modules/ConventionModule/Convention.module";
import {ConventionService} from "../../Services/ConventionService/convention.service";

@Component({
  selector: 'app-myconventions',
  templateUrl: './myconventions.component.html',
  styleUrl: './myconventions.component.css'
})
export class MyconventionsComponent {
  conventions: Convention[] = [];

  constructor(private conventionService: ConventionService) {
  }

  ngOnInit(): void {
    const userId = 1; // Replace with the actual user ID
    this.conventionService.getConventionsByUser(userId).subscribe(conventions => {
      this.conventions = conventions;
    });
  }
}
