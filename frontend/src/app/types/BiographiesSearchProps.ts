import { PersonInterface } from "./PersonInterface";

export interface BiographiesSearchProps {
    personArr: PersonInterface[];
    setFilteredOptions: React.Dispatch<React.SetStateAction<string[]>>;
}
