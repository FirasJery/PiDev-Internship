export enum RoleUser {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ETUDIANT = 'ETUDIANT',
  AGENT_ENTREPRISE = 'AGENT_ENTREPRISE',
  AGENT_STAGE = 'AGENT_STAGE'
}

export class User {
  id_User!: number;
  login!: string;
  password!: string;
  nom!: string;
  prenom!: string;
  roleUser!: RoleUser; 
  classe!: string;
  email!: string;
  num_tel!: number;
  role_enreprise!: string;
  identifiant!: string;
  specialite!: string;
}