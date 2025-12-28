"use client";

import { Box, Paper, Slide, Typography } from "@mui/material";
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
import { useEffect, useRef, useState } from "react";

function CategoryCards() {
    const labelAndIcon = [
        { label: "Військова справа", icon: <MilitaryTechIcon sx={{ fontSize: 140 }} /> },
        { label: "Політика", icon: <GavelIcon sx={{ fontSize: 140 }} /> },
        { label: "Наука", icon: <ScienceIcon sx={{ fontSize: 140 }} /> },
        { label: "Бізнес", icon: <BusinessCenterIcon sx={{ fontSize: 140 }} /> },
        { label: "Культура", icon: <PaletteIcon sx={{ fontSize: 140 }} /> },
        { label: "Письменницька діяльність", icon: <HistoryEduIcon sx={{ fontSize: 140 }} /> },
        { label: "Спорт", icon: <EmojiEventsIcon sx={{ fontSize: 140 }} /> },
        { label: "Громадська діяльність", icon: <GroupsIcon sx={{ fontSize: 140 }} /> },
        { label: "Релігія", icon: <ChurchIcon sx={{ fontSize: 140 }} /> },
        { label: "Інше", icon: <MoreHorizIcon sx={{ fontSize: 140 }} /> },
    ];

    const BoxRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    // show the component with an animation when it becomes visible in the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true); // run animation
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (BoxRef.current) observer.observe(BoxRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Typography variant="h4" sx={{ marginTop: "36px" }} gutterBottom>
                Досліджуйте біографії за категоріями
            </Typography>
            <Box
                ref={BoxRef}
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    marginBottom: "36px",
                }}
            >
                {labelAndIcon.map((elem, index) => {
                    return (
                        <Slide
                            direction="right"
                            style={{ transitionDelay: `${index * 90}ms` }}
                            key={index}
                            in={visible}
                            {...{ timeout: 1100 }}
                        >
                            <Paper
                                elevation={3}
                                sx={{
                                    ":hover": {
                                        boxShadow: 10,
                                    },
                                    width: { xs: "47%", lg: "18%" },
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "40px",
                                    cursor: "pointer",
                                }}
                            >
                                {elem.icon}
                                <Typography variant="h6" sx={{ marginTop: "16px", marginBottom: "6px", textAlign: "center" }}>
                                    {elem.label}
                                </Typography>
                            </Paper>
                        </Slide>
                    );
                })}
            </Box>
        </>
    );
}

export default CategoryCards;
