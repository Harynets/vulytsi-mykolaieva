"use client";

import { Box, Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { PersonInterface } from "../types/PersonInterface";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BiographiesSearch from "./components/BiographiesSearch";
import BiographiesList from "./components/BiographiesList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryFilter from "./components/CategoryFilter";

const categories = {
    military: "Військова справа",
    politics: "Політика",
    science: "Наука",
    business: "Бізнес",
    culture: "Культура",
    writers: "Письменницька діяльність",
    sport: "Спорт",
    public: "Громадська діяльність",
    religion: "Релігія",
    other: "Інше",
};

const CARDS_PER_PAGE = 2;

function Biographies() {
    const params = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // get value from url or use default value
    const [searchValue, setSearchValue] = useState<string>(params.get("query")?.toString() ?? "");
    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        params.get("categories")?.toString().split(",") || Object.values(categories),
    );
    const [page, setPage] = useState(Number(params.get("page")) || 1);
    const [isLoading, setIsLoading] = useState(true);
    const [personArr, setPersonArr] = useState<PersonInterface[]>([]);

    const filteredOptions = useMemo(() => {
        // exit if personArr is not fetched yet
        if (personArr.length === 0) {
            return [];
        }

        const allPersonsWithSelectedCategories = Array.from(
            personArr.filter((elem) => selectedCategories.includes(categories[elem.category])),
            (elem) => elem.name,
        );

        return personArr
            .map((person) => person.name)
            .filter((name) => name.toLowerCase().includes(searchValue.toLowerCase())) // filter by user search
            .filter((elem) => allPersonsWithSelectedCategories.includes(elem)); // filter by categories
    }, [personArr, searchValue, selectedCategories]);

    // fetch array of all persons
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/person_list?format=json`)
            .then((res) => {
                setPersonArr(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error:", err.response?.status, err.response?.data);
            });
    }, []);

    const handlePageChange = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        setPage(pageNumber);
        // add current page number to url
        const inputParams = new URLSearchParams(params);
        inputParams.set("page", pageNumber.toString());
        replace(`${pathname}?${inputParams.toString()}`);
    };

    function updateURL(newSearch: string | null, newCategories?: string[] | string | null) {
        const currentSearch = newSearch || searchValue;
        const currentCategories = newCategories || selectedCategories;

        const inputParams = new URLSearchParams(params);

        inputParams.set("page", "1");
        setPage(1);
        if (currentSearch) {
            inputParams.set("query", currentSearch);
        } else {
            inputParams.delete("query");
        }

        if (currentCategories.length > 0) {
            inputParams.set(
                "categories",
                typeof currentCategories === "string" ? currentCategories : currentCategories.join(","),
            );
        } else {
            inputParams.delete("categories");
        }

        replace(`${pathname}?${inputParams.toString()}`);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    alignItems: "center",
                    marginY: "18px",
                }}
            >
                <Box sx={{ width: { md: "80%", xs: "93%" } }}>
                    <BiographiesSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        updateURL={updateURL}
                        personArr={personArr}
                        selectedCategories={selectedCategories}
                        categories={categories}
                    />
                    <CategoryFilter
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        updateURL={updateURL}
                        categories={categories}
                    />

                    <BiographiesList
                        filteredOptions={filteredOptions.slice(
                            (page - 1) * CARDS_PER_PAGE,
                            (page - 1) * CARDS_PER_PAGE + CARDS_PER_PAGE,
                        )}
                        personArr={personArr}
                        isLoading={isLoading}
                    />
                </Box>
                {filteredOptions.length / CARDS_PER_PAGE > 1 ? (
                    <Pagination
                        count={Math.ceil(filteredOptions.length / CARDS_PER_PAGE)}
                        page={page}
                        onChange={handlePageChange}
                        shape="rounded"
                        size="large"
                    />
                ) : null}
            </Box>
            <Footer />
        </Box>
    );
}

export default Biographies;
