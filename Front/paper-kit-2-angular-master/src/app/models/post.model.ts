import { Commentaire } from './commentaire.model'; // Make sure to create a Commentaire model as well

export class Post {
    constructor(
        public id_Post: number, // Assuming the ID might be needed, even if it's not set during creation
        public contenu_Post: string,
        public sujet_Post: string,
        public isAnonymous: boolean,
        public date_Post: Date,
        public commentaireSet: Commentaire[] // Make sure the Commentaire model is also defined
    ) {}
}
