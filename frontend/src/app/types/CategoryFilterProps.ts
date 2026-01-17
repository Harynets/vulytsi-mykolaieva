export interface CategoryFilterProps {
    selectedCategories: string[];
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
    updateURL: (newSearch: string | null, newCategories?: string[] | string | null) => void;
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
