import { Box, Button, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import React from "react";

function Hero() {
    return (
        <Box
            sx={{
                width: "100%",
                py: 24,
                px: 5,
                backgroundImage: "url('/background_map.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ textAlign: "center" }} variant="h3" gutterBottom>
                    Відкрий історії людей, чиї імена живуть у назвах вулиць міста
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="h4" color="text.secondary" gutterBottom>
                    Інтерактивна карта з біографіями відомих постатей
                </Typography>

                <Button href="map" variant="contained" color="success" startIcon={<TravelExploreIcon />}>
                    Відкрити карту
                </Button>
            </Box>
        </Box>
    );
}

export default Hero;
