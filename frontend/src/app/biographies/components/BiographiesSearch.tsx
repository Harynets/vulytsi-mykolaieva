import { BiographiesSearchProps } from "@/app/types/BiographiesSearchProps";
import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";

function BiographiesSearch({ personArr, setFilteredOptions }: BiographiesSearchProps) {
    // called every time user types something in the search input
    const handleInputChange = (event: React.SyntheticEvent, value: string) => {
        const filtered = personArr.map((p) => p.name).filter((name) => name.toLowerCase().includes(value.toLowerCase()));
        setFilteredOptions(filtered);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Autocomplete
                sx={{ marginY: "32px", width: { xs: "90%", md: "40%" } }}
                onInputChange={handleInputChange}
                freeSolo
                options={Array.from(personArr, (person) => person.name)}
                renderInput={(params) => <TextField {...params} label="Пошук" />}
            />
        </Box>
    );
}

export default BiographiesSearch;
