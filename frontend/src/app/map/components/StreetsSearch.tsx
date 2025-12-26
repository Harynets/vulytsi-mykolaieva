import { Autocomplete, TextField } from "@mui/material";
import { StreetsSearchProps } from "@/app/types/StreetsSearchProps";
import { Street } from "@/app/types/Street";

function StreetsSearch({ allStreets, addMarkerOnMap }: StreetsSearchProps) {
    return (
        <Autocomplete<Street>
            disablePortal
            clearOnEscape
            options={allStreets}
            getOptionLabel={(option) => option.name}
            noOptionsText="Вулицю не знайдено"
            sx={{
                width: 500,
                position: "fixed",
                zIndex: 500,
                top: 15,
                left: 65,
                backgroundColor: "white",
                borderRadius: "4px",
            }}
            renderInput={(params) => <TextField {...params} label="Пошук" />}
            onChange={(event: any, newValue: Street | null) => {
                if (newValue?.coords) {
                    addMarkerOnMap(newValue.coords);
                }
            }}
        />
    );
}

export default StreetsSearch;
