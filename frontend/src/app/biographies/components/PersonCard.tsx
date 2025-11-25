import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface Props {
    name: string;
    photo: string;
}

function PersonCard({ name, photo }: Props) {
    return (
        <Box
            sx={{
                width: { xs: "50%", sm: "33.3333%", md: "25%", xl: "20%" },
                marginY: "27px",
            }}
        >
            <Link
                href={`/person/${name.replace(/ /g, "_")}`}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                <Avatar
                    sx={{
                        width: 154,
                        height: 154,
                        marginBottom: "7px",
                        transition: "transform 0.05s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.07)",
                        },
                    }}
                    alt={name}
                    src={photo}
                />

                <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {name}
                </Typography>
            </Link>
        </Box>
    );
}

export default PersonCard;
