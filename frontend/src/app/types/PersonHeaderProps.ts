export interface PersonHeaderProps {
    name: string;
    photo: string;
    date_of_birth: string;
    date_of_death: string;
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
