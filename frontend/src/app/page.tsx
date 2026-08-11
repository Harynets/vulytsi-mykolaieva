import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import CategoryCards from "./components/CategoryCards";
import ShortBiographyCarousel from "./components/Carousel/components/ShortBiographyCarousel";

export default function MainPage() {
    return (
        <>
            <Navbar />
            <Hero />

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: { md: "80%", xs: "93%" },
                        }}
                    >
                        <Statistics />
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: "#F5F5F5", width: "100%", display: "flex", justifyContent: "center" }}>
                    <Box
                        sx={{
                            width: { xl: "82%", lg: "94%", md: "90%", xs: "93%" },
                            paddingX: "30px",
                        }}
                    >
                        <CategoryCards />
                    </Box>
                </Box>
            </Box>
            <ShortBiographyCarousel />
            <Footer />
        </>
    );
}
