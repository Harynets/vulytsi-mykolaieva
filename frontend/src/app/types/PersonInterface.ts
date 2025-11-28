export interface PersonInterface {
    id: number;
    name: string;
    date_of_birth: string;
    date_of_death: string;
    photo: string;
    quote: string;
    biography: string;
    short_biography: string;
    category:
        | "military"
        | "politics"
        | "science"
        | "business"
        | "culture"
        | "writers"
        | "sport"
        | "public"
        | "religion"
        | "other";
}
