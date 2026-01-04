"use client";

import { BiographiesSearchProps } from "@/app/types/BiographiesSearchProps";
import { Autocomplete, Box, TextField } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function BiographiesSearch({ personArr, setFilteredOptions, params, setPage }: BiographiesSearchProps) {
    const [value, setValue] = useState<string>(params.get("query")?.toString() ?? "");
    const pathname = usePathname();
    const { replace } = useRouter();

    // called when user selects an option or confirms input value
    const handleInputChange = (event: React.SyntheticEvent, value: string) => {
        setValue(value);
        setPage(1); // return to the first page
        const filtered = personArr
            .map((person) => person.name)
            .filter((name) => name.toLowerCase().includes(value.toLowerCase()));
        setFilteredOptions(filtered);

        // update url
        const inputParams = new URLSearchParams(params);
        if (value) {
            inputParams.set("query", value);
            inputParams.set("page", "1");
        } else {
            inputParams.delete("query");
        }
        replace(`${pathname}?${inputParams.toString()}`);
    };

    // set filtered options, when personArr promise resolved
    useEffect(() => {
        if (value) {
            const filtered = personArr
                .map((person) => person.name)
                .filter((name) => name.toLowerCase().includes(value.toLowerCase()));
            setFilteredOptions(filtered);
        }
    }, [personArr]);

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Autocomplete
                sx={{ marginY: "32px", width: { xs: "90%", md: "40%" } }}
                freeSolo
                options={Array.from(personArr, (person) => person.name)}
                renderInput={(params) => <TextField {...params} label="Пошук" />}
                value={value}
                onChange={(event, newValue) => handleInputChange(event, newValue ?? "")}
            />
        </Box>
    );
}

export default BiographiesSearch;
