import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  message: string = '';
  isRedirected = false;
  url : string = "http://localhost:9090";
  constructor(private http: HttpClient,private keycloakService: KeycloakService, private router: Router) {}
   redirectAfterLogin() {
    console.log('Redirected = ' + this.isRedirected);
    if (!this.isRedirected) {
      const isAuthenticated = this.keycloakService.isLoggedIn();
      if (isAuthenticated) {
        const userRoles = this.keycloakService.getUserRoles();
        if (userRoles.includes('Super-Admin') || userRoles.includes('Agent-esprit')) {
          console.log('Redirecting to admin');
          this.router.navigate(['/admins']);
          this.isRedirected = true;
          console.log('Redirected = ' + this.isRedirected);
        } else {
          console.log('Redirecting to user');
          this.router.navigate(['/user']);
          this.isRedirected = true;
        }
      }
    }
  }
  getSuperAdmin()
  {
    this.http.get<{message : string}>(this.url+"/HelloSuperAdmin").subscribe(
      (responseData) => {
        this.message = responseData.message;
      }
    );
    return this.message;
  }

  adduser()
  {
    this.http.post<{message : string}>(this.url+"/CreateUser",{}).subscribe(
      (responseData) => {
        this.message = responseData.message;
      }
    );
    return this.message;
  }
  getEtudiant()
  {

  }
  getAgentEntreprise()
  {

  }
  getAgentEsprit()
  {

  }

}
