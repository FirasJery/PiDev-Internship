import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar-front',
  templateUrl: './nav-bar-front.component.html',
  styleUrl: './nav-bar-front.component.css'
})
export class NavBarFrontComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  GoToReclamation():void{
    this.router.navigate(['reclamation'], {relativeTo: this.route})
  }

}
