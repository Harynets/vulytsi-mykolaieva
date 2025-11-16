import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Box, Typography } from "@mui/material";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import ShortBiographyCards from "./components/ShortBiographyCards";

export default function MainPage() {
    return (
        <>
            <Navbar />
            <Hero />

            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginY: "16px" }}>
                <Box sx={{ width: { md: "80%", xs: "93%" } }}>
                    <Statistics />

                    <Typography variant="h4" gutterBottom>
                        А ви знали, що в Миколаєві є
                    </Typography>

                    <ShortBiographyCards />
                </Box>
            </Box>
            <Footer />
        </>
    );
}
