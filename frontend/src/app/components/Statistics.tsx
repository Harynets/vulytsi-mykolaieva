import { Box, Typography, Zoom } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SignpostOutlinedIcon from "@mui/icons-material/SignpostOutlined";

function Statistics() {
    const statisticsData = [
        { name: "Вулиць", number: "888", icon: <SignpostOutlinedIcon color="success" /> },
        { name: "Біографії", number: "194", icon: <PersonOutlineOutlinedIcon color="success" /> },
        { name: "Років історії міста", number: "236", icon: <AccessTimeIcon color="success" /> },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-around",
                paddingY: { xs: "95px", md: "120px" },
            }}
        >
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
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {data.icon}
                                <Typography
                                    variant="h5"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: {
                                            xs: "14px",
                                            md: "20px",
                                            lg: "24px",
                                        },
                                        marginLeft: "6px",
                                    }}
                                >
                                    {data.name}
                                </Typography>
                            </Box>
                        </Box>
                    </Zoom>
                );
            })}
        </Box>
    );
}

export default Statistics;
