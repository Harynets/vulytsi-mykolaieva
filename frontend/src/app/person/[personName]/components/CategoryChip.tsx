import { Chip } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import GavelIcon from "@mui/icons-material/Gavel";
import ScienceIcon from "@mui/icons-material/Science";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PaletteIcon from "@mui/icons-material/Palette";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import ChurchIcon from "@mui/icons-material/Church";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import { CategoryChipProps } from "@/app/types/CategoryChipProps";

function CategoryChip({ category }: CategoryChipProps) {
    const labelAndIcon = {
        military: { label: "Військова справа", icon: <MilitaryTechIcon /> },
        politics: { label: "Політика", icon: <GavelIcon /> },
        science: { label: "Наука", icon: <ScienceIcon /> },
        business: { label: "Бізнес", icon: <BusinessCenterIcon /> },
        culture: { label: "Культура", icon: <PaletteIcon /> },
        writers: { label: "Письменницька діяльність", icon: <HistoryEduIcon /> },
        sport: { label: "Спорт", icon: <EmojiEventsIcon /> },
        public: { label: "Громадська діяльність", icon: <GroupsIcon /> },
        religion: { label: "Релігія", icon: <ChurchIcon /> },
        other: { label: "Інше", icon: <MoreHorizIcon /> },
    };

    return (
        <Chip
            sx={{ marginBottom: "7px" }}
            icon={labelAndIcon[category].icon}
            variant="outlined"
            label={labelAndIcon[category].label}
        />
    );
}
export default CategoryChip;
