import { PersonQuoteProps } from "@/app/types/PersonQuoteProps";
import { Box, Typography } from "@mui/material";
import React from "react";

function PersonQuote({ name, quote }: PersonQuoteProps) {
    return (
        <Box sx={{ marginY: "38px" }}>
            <Typography
                component="blockquote"
                sx={{
                    fontSize: { xs: "30px", sm: "37px" },
                    borderLeft: "5px solid #ccc",
                    pl: 2,
                    fontStyle: "italic",
                    fontWeight: "bold",
                }}
            >
                «{quote}»
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Typography color="text.secondary">{name}</Typography>
            </Box>
        </Box>
    );
}

export default PersonQuote;
