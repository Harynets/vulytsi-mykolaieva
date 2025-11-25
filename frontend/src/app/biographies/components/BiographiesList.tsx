import { PersonInterface } from "@/app/types/PersonInterface";
import { Box } from "@mui/material";
import React from "react";
import PersonCard from "./PersonCard";

interface Props {
    filteredOptions: string[];
    personArr: PersonInterface[];
}

function BiographiesList({ filteredOptions, personArr }: Props) {
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
