"use client";

import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PersonInterface } from "../types/PersonInterface";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BiographiesSearch from "./components/BiographiesSearch";
import BiographiesList from "./components/BiographiesList";

function Biographies() {
    const [personArr, setPersonArr] = useState<PersonInterface[]>([]);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    // fetch array of all persons
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/person_list?format=json`)
            .then((res) => {
                setPersonArr(res.data);
            })
            .catch((err) => {
                console.error("Error:", err.response?.status, err.response?.data);
            });
    }, []);

    return (
        <>
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
                        <BiographiesSearch personArr={personArr} setFilteredOptions={setFilteredOptions} />

                        <BiographiesList filteredOptions={filteredOptions} personArr={personArr} />
                    </Box>
                </Box>
                <Footer />
            </Box>
        </>
    );
}

export default Biographies;
