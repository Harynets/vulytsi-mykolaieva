import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import PersonCard from "./PersonCard";
import { BiographiesListProps } from "@/app/types/BiographiesListProps";

function BiographiesList({ filteredOptions, personArr, isLoading }: BiographiesListProps) {
    if (isLoading) {
        return (
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {Array.from({ length: 15 }).map((elem, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginY: "27px",
                            width: { xs: "50%", sm: "33.3333%", md: "25%", xl: "20%" },
                        }}
                    >
                        <Skeleton variant="circular" width={154} height={154} />
                        <Skeleton width={170} height={30} sx={{ marginTop: "8px" }} />
                    </Box>
                ))}
            </Box>
        );
    }

    if (filteredOptions.length === 0) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h5" sx={{ textAlign: "center", marginTop: "18px" }}>
                    За Вашим запитом нічого не знайдено.
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Можливо Ви ввели некоректний запит. Перевірте правильність написання імені. Перевірте фільтри.
                </Typography>
            </Box>
        );
    }
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {filteredOptions.map((personName) => {
                // get full person data by name from personArr
                const allSinglePersonData = personArr.find((person) => {
                    return person.name === personName;
                });

                return (
                    <PersonCard
                        key={allSinglePersonData?.id}
                        name={allSinglePersonData!!.name}
                        photo={allSinglePersonData!!.photo}
                    />
                );
            })}
        </Box>
    );
}

export default BiographiesList;
