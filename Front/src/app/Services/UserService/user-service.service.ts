import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {KeycloakService} from "keycloak-angular";
import {KeycloakUser, keyCredential} from "../../Modules/UserModule/KeycloakUserRep";
import {CrossOrigin} from "@angular-devkit/build-angular";
import {User, UserWrapper} from "../../Modules/UserModule/User";

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

  adduser()
  {
    let creds = new keyCredential('password','123456',true);
    let keyUser: KeycloakUser = new KeycloakUser('userAngular',true,'userAngular@gmail.com',[creds],['etudiant'],'rejel');
    let user : User = new User('userAngular','userAngular@gmail.com','3A13',12345678,"",'123JMT158','gl');
    let userWrapper : UserWrapper = new UserWrapper(keyUser,user);
    //console.log('UserWrapper object:', userWrapper);
    console.log('UserWrapper JSON:', JSON.stringify(userWrapper));
    this.http.post<{message : string}>(this.url + '/api/service/user/CreateUser',userWrapper).subscribe(
      (responseData) => {
        this.message = responseData.message;
      }
    );
    return this.message;
  }


}
