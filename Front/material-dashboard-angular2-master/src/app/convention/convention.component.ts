import { Component, OnInit } from '@angular/core';
import {Convention, ConventionService} from "../convention.service";

@Component({
  selector: 'app-convention',
  templateUrl: './convention.component.html',
  styleUrls: ['./convention.component.scss']
})
export class ConventionComponent implements OnInit {

  conventions: Convention[] = [];

  constructor(private conventionService: ConventionService) { }

  ngOnInit() {
    this.conventionService.getConventions().subscribe((data: Convention[]) => {
      this.conventions = data;
    });

  }

  validateConvention(id: number) {
    this.conventionService.validateConvention(id).subscribe(() => {
      this.conventions = this.conventions.map(convention => {
        if (convention.id_Convention === id) {
          convention.is_valid = true;
        }
        return convention;
      });
    });
  }

}
