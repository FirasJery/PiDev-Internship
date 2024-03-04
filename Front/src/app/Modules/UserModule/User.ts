import {KeycloakUser} from "./KeycloakUserRep";

export class User {
  login: string;
  email: string;
  classe: string;
  num_tel: number;
  role_enreprise: string;
  identifiant: string;
  specialite: string;

  constructor(login: string, email: string, classe: string, num_tel: number, role_enreprise: string, identifiant: string, specialite: string) {
    this.login = login;
    this.email = email;
    this.classe = classe;
    this.num_tel = num_tel;
    this.role_enreprise = role_enreprise;
    this.identifiant = identifiant;
    this.specialite = specialite;
  }
}

export class UserWrapper {
  private keycloakUser: KeycloakUser;
  private user: User;

  constructor(keycloakUser: KeycloakUser, user: User) {
    this.keycloakUser = keycloakUser;
    this.user = user;
  }

  // Getters
  getKeycloakUser(): KeycloakUser {
    return this.keycloakUser;
  }

  getUser(): User {
    return this.user;
  }

  // Setters
  setKeycloakUser(keycloakUser: KeycloakUser): void {
    this.keycloakUser = keycloakUser;
  }

  setUser(user: User): void {
    this.user = user;
  }
}
