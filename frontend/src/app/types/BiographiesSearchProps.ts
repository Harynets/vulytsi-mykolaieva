import { ReadonlyURLSearchParams } from "next/navigation";
import { PersonInterface } from "./PersonInterface";

export interface BiographiesSearchProps {
    personArr: PersonInterface[];
    setFilteredOptions: React.Dispatch<React.SetStateAction<string[]>>;
    params: ReadonlyURLSearchParams;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}
