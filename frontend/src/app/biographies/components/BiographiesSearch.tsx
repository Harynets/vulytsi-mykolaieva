import { BiographiesSearchProps } from "@/app/types/BiographiesSearchProps";
import { Autocomplete, Box, TextField } from "@mui/material";

function BiographiesSearch({
    searchValue,
    setSearchValue,
    updateURL,
    personArr,
    selectedCategories,
    categories,
}: BiographiesSearchProps) {
    // called when user selects an option or confirms input value
    const handleInputChange = (event: React.SyntheticEvent, value: string) => {
        setSearchValue(value);
        updateURL(value);
    };

    const allPersonsWithSelectedCategories = Array.from(
        personArr.filter((elem) => selectedCategories.includes(categories[elem.category])),
        (elem) => {
            return elem.name;
        }
    );

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Autocomplete
                sx={{ marginY: "20px", width: { xs: "90%", md: "40%" } }}
                freeSolo
                options={allPersonsWithSelectedCategories}
                renderInput={(params) => <TextField {...params} label="Пошук" />}
                value={searchValue}
                onChange={(event, newValue) => handleInputChange(event, newValue ?? "")}
            />
        </Box>
    );
}

export default BiographiesSearch;
