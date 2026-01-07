"use client";

import { Box, Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { PersonInterface } from "../types/PersonInterface";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BiographiesSearch from "./components/BiographiesSearch";
import BiographiesList from "./components/BiographiesList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Biographies() {
    const CARDS_PER_PAGE = 20;

    const params = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [page, setPage] = useState(Number(params.get("page")) || 1);
    const [personArr, setPersonArr] = useState<PersonInterface[]>([]);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // fetch array of all persons
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/person_list?format=json`)
            .then((res) => {
                setPersonArr(res.data);
                setIsLoading(false);
                // add all person cards to the main page when no query
                if (!params.get("query")) {
                    setFilteredOptions(res.data.map((person: PersonInterface) => person.name));
                }
            })
            .catch((err) => {
                console.error("Error:", err.response?.status, err.response?.data);
            });
    }, []);

    function handlePageChange(event: React.ChangeEvent<unknown>, pageNumber: number) {
        setPage(pageNumber);
        // add current page number to url
        const inputParams = new URLSearchParams(params);
        inputParams.set("page", pageNumber.toString());
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
                        personArr={personArr}
                        setFilteredOptions={setFilteredOptions}
                        params={params}
                        setPage={setPage}
                    />

                    <BiographiesList
                        filteredOptions={filteredOptions.slice(
                            (page - 1) * CARDS_PER_PAGE,
                            (page - 1) * CARDS_PER_PAGE + CARDS_PER_PAGE
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
