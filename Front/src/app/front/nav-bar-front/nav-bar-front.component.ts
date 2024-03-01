import { Component } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar-front',
  templateUrl: './nav-bar-front.component.html',
  styleUrl: './nav-bar-front.component.css'
})
export class NavBarFrontComponent {


  constructor(private keycloakService: KeycloakService, private router : Router) {

  }
  logout()
  {
    this.keycloakService.logout();
  }
}
