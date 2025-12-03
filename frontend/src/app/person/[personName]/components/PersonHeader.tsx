import { Box, Typography } from "@mui/material";
import React from "react";
import CategoryChip from "./CategoryChip";
import { PersonHeaderProps } from "@/app/types/PersonHeaderProps";

function PersonHeader({ name, photo, category, date_of_birth, date_of_death, short_biography }: PersonHeaderProps) {
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", marginY: "25px" }}>
            <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <img style={{ width: "100%", borderRadius: "8px" }} src={photo} alt={name} />
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "50%" }, paddingLeft: { xs: "0px", sm: "40px" } }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginY: "18px",
                    }}
                >
                    <Typography variant="h3">{name}</Typography>
                </Box>
                <CategoryChip category={category} />

                <Typography sx={{ marginY: "7px" }} variant="h6">
                    Роки життя: {new Date(date_of_birth).getFullYear()} - {new Date(date_of_death).getFullYear()}
                </Typography>

                {short_biography.split("\n").map((elem: string, index: number) => {
                    return (
                        <Typography sx={{ textIndent: 40, textAlign: "justify" }} key={index}>
                            {elem}
                        </Typography>
                    );
                })}
            </Box>
        </Box>
    );
}

export default PersonHeader;
