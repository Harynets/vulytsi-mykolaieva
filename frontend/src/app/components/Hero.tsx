import { Box, Button, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import React from "react";

function Hero() {
    return (
        <Box
            sx={{
                width: "100%",
                py: 22,
                px: 5,
                marginBottom: 0,
                backgroundImage: "url('/background_map.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{ textAlign: "center", fontSize: { xs: 36, sm: 40, md: 42, lg: 44 } }}
                    fontWeight="bold"
                    variant="h3"
                    gutterBottom
                >
                    Дізнайтесь історії людей, чиї імена носять вулиці Миколаєва
                </Typography>
                <Typography
                    sx={{ textAlign: "center", marginBottom: "64px", fontSize: { xs: 26, md: 28 }, fontWeight: "bold" }}
                    variant="h4"
                    color="text.secondary"
                    gutterBottom
                >
                    Інтерактивна карта з
                    <Box component="span" sx={{ color: "#2E7D32" }}>
                        &nbsp;біографіями&nbsp;
                    </Box>
                    відомих постатей
                </Typography>

                <Button href="map" variant="contained" size="large" color="success" startIcon={<TravelExploreIcon />}>
                    Відкрити карту
                </Button>
            </Box>
        </Box>
    );
}

export default Hero;
