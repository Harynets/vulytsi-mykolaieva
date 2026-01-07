import { Box, Typography } from "@mui/material";
import React from "react";
import PersonCard from "./PersonCard";
import { BiographiesListProps } from "@/app/types/BiographiesListProps";

function BiographiesList({ filteredOptions, personArr }: BiographiesListProps) {
    if (filteredOptions.length === 0) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                    За Вашим запитом нічого не знайдено.
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Можливо Ви ввели некоректний запит. Перевірте правильність написання ключових слів.
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
