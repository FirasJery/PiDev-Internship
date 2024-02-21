export class Convention {
    constructor(
        public nom_entreprise: string,
        public date_debut: Date,
        public date_fin: Date,
        public adresse: string,
        public num_tel: number,
        public nom_encadrant: string,
        public email_encadrant: string,
        public is_valid: boolean
    ) {}
}
