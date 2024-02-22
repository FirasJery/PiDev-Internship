
export enum TypeSujet {
    STAGE_FORMATION_HUMAINE_SOCIALE = "STAGE_FORMATION_HUMAINE_SOCIALE",
    STAGE_IMMERSION_ENTREPRISE = "STAGE_IMMERSION_ENTREPRISE",
    STAGE_INGENIEUR = "STAGE_INGENIEUR"
  }
  
  export class Sujet {
    id_Sujet: number;
    titre_Sujet: string;
    description_Sujet: string;
    dure_Sujet: string;
    lieu: string;
    nbr_etudiant_required: number;
    requirements: string;
    typeSujet: TypeSujet;
    nomentreprise: string;
    mailentreprise: string;
  }
  