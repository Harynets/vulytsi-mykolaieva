import { Box, Typography, Zoom } from "@mui/material";
import React from "react";

function Statistics() {
    const statisticsData = [
        { name: "Вулиць", number: "888" },
        { name: "Біографії", number: "194" },
        { name: "Років історії міста", number: "236" },
    ];
    return (
        <Box sx={{ display: "flex", justifyContent: "space-around", marginY: "85px" }}>
            {statisticsData.map((data, index) => {
                return (
                    <Zoom key={index} in={true} {...{ timeout: 600 * (index + 1) }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: {
                                        xs: "50px",
                                        sm: "64px",
                                        lg: "90px",
                                    },
                                    fontWeight: "bold",
                                }}
                            >
                                {data.number}
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                sx={{
                                    fontSize: {
                                        xs: "14px",
                                        md: "20px",
                                        lg: "24px",
                                    },
                                }}
                            >
                                {data.name}
                            </Typography>
                        </Box>
                    </Zoom>
                );
            })}
        </Box>
    );
}

export default Statistics;
