import { Component } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-nav-bar-front',
  templateUrl: './nav-bar-front.component.html',
  styleUrl: './nav-bar-front.component.css'
})
export class NavBarFrontComponent {
  constructor(private router: Router, private route: ActivatedRoute, private keycloakService: KeycloakService) {}

  GoToReclamation():void{
    this.router.navigate(['reclamation'], {relativeTo: this.route})
  }

  logout()
  {
    this.keycloakService.logout();
  }

}
