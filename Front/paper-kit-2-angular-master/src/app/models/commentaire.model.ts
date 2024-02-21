export class Commentaire {
    constructor(
        public id_Commentaire: number, // Same here, assuming ID is needed
        public rating: number,
        public averageRating: number,
        public description: string,
        public date_commentaire: Date,
        // No need for a 'post' property here if you're using this within the context of a Post
    ) {}
}
