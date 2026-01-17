import { CategoryFilterProps } from "@/app/types/CategoryFilterProps";
import {
    Box,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Typography,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 9.5,
            width: 250,
        },
    },
};

const SELECT_ALL = "Обрати все";
const UNSELECT_ALL = "Зняти вибір";

function CategoryFilter({ selectedCategories, setSelectedCategories, updateURL, categories }: CategoryFilterProps) {
    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const value = typeof event.target.value === "string" ? event.target.value.split(",") : event.target.value;

        if (value.includes(SELECT_ALL)) {
            setSelectedCategories(Object.values(categories));
            updateURL(null, Object.values(categories));
        } else if (value.includes(UNSELECT_ALL)) {
            setSelectedCategories([]);
            updateURL(null, []);
        } else {
            setSelectedCategories(value);
            updateURL(null, value);
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", marginTop: "6px" }}>
            <Typography variant="h6">Фільтр за категоріями</Typography>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel>Категорія</InputLabel>

                <Select
                    multiple
                    value={selectedCategories}
                    onChange={handleChange}
                    input={<OutlinedInput label="Категорія" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                >
                    <MenuItem value={SELECT_ALL}>
                        <ListItemText primary={SELECT_ALL} />
                    </MenuItem>

                    <MenuItem value={UNSELECT_ALL}>
                        <ListItemText primary={UNSELECT_ALL} />
                    </MenuItem>

                    {Object.values(categories).map((category) => (
                        <MenuItem key={category} value={category}>
                            <Checkbox checked={selectedCategories.includes(category)} />
                            <ListItemText primary={category} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default CategoryFilter;
