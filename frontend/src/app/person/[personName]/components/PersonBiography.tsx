import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
    biography: string;
}

function PersonBiography({ biography }: Props) {
    return (
        <>
            <Typography sx={{ fontWeight: "bold", marginBottom: "8px" }} variant="h5">
                Розгорнута біографія
            </Typography>
            <Box sx={{ marginBottom: "26px" }}>
                {biography.split("\n").map((elem: string, index: number) => {
                    return (
                        <Typography sx={{ textIndent: 40, textAlign: "justify" }} key={index}>
                            {elem}
                        </Typography>
                    );
                })}
            </Box>
        </>
    );
}

export default PersonBiography;
