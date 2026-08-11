"use client";

import { PersonInterface } from "@/app/types/PersonInterface";
import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EmblaCarousel from "./EmblaCarousel";

function ShortBiographyCarousel() {
    const [randomPersonArr, setRandomPersonArr] = useState<PersonInterface[]>();

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/person_random_list/10/`)
            .then((res) => {
                setRandomPersonArr(res.data);
            })
            .catch((err) => {
                console.error("Error:", err.response?.status, err.response?.data);
            });
    }, []);

    return (
        <Box sx={{ marginY: "90px" }}>
            <EmblaCarousel persons={randomPersonArr} options={{ align: "start", loop: true }} />
        </Box>
    );
}

export default ShortBiographyCarousel;
