import { PersonInterface } from "./PersonInterface";

export interface BiographiesSearchProps {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    updateURL: (newSearch: string | null, newCategories?: string[] | string | null) => void;
    personArr: PersonInterface[];
    selectedCategories: string[];
    categories: {
        military: string;
        politics: string;
        science: string;
        business: string;
        culture: string;
        writers: string;
        sport: string;
        public: string;
        religion: string;
        other: string;
    };
}
