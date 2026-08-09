"use client";

import { Box, Paper, Slide, Typography, useMediaQuery } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ScienceIcon from "@mui/icons-material/Science";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PaletteIcon from "@mui/icons-material/Palette";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import ChurchIcon from "@mui/icons-material/Church";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function CategoryCards() {
    const isMobile = useMediaQuery("(max-width:600px)");

    const FONT_SIZE = isMobile ? 60 : 110;
    const STROKE_WIDTH = 0.5;

    const categoryData = [
        {
            label: "Військова справа",
            icon: (
                <MilitaryTechIcon
                    sx={{
                        fontSize: FONT_SIZE,
                        color: "#B0B47B",
                        stroke: "#464A2B",
                        strokeWidth: STROKE_WIDTH,
                        strokeLinejoin: "round",
                    }}
                />
            ),
            color: "#757A49",
        },
        {
            label: "Політика",
            icon: (
                <AccountBalanceIcon
                    sx={{
                        fontSize: FONT_SIZE,
                        color: "#90A2C4",
                        stroke: "#102B45",
                        strokeWidth: STROKE_WIDTH,
                        strokeLinejoin: "round",
                    }}
                />
            ),
            color: "#1F517F",
        },
        {
            label: "Наука",
            icon: (
                <ScienceIcon
                    sx={{
                        fontSize: FONT_SIZE,
                        color: "#F6B589",
                        stroke: "#8F4911",
                        strokeWidth: STROKE_WIDTH,
                        strokeLinejoin: "round",
                    }}
                />
            ),
            color: "#e0843a",
        },
        {
            label: "Бізнес",
            icon: (
                <BusinessCenterIcon
                    sx={{
                        fontSize: FONT_SIZE,
                        color: "#A6B0BF",
                        stroke: "#3A4752",
                        strokeWidth: STROKE_WIDTH,
                        strokeLinejoin: "round",
                    }}
                />
            ),
            color: "#6A7F90",
        },
        {
            label: "Культура",
            icon: (
                <PaletteIcon
                    sx={{
                        fontSize: FONT_SIZE,
                        color: "#C9A4CF",
                        stroke: "#4F2C55",
                        strokeWidth: STROKE_WIDTH,
                        strokeLinejoin: "round",
                    }}
                />
            ),
            color: "#8D5197",
        },
        {
            label: "Письменницька діяльність",
            icon: (
                <HistoryEduIcon
                    sx={{
                        fontSize: FONT_SIZE,
                        color: "#D99491",
                        stroke: "#5C2D2B",
                        strokeWidth: STROKE_WIDTH,
                        strokeLinejoin: "round",
                    }}
                />
            ),
            color: "#9D5C5A",
        },
        {
            label: "Спорт",
            icon: (
                <EmojiEventsIcon
                    sx={{
                        fontSize: FONT_SIZE,
                        color: "#EAC463",
                        stroke: "#73551A",
                        strokeWidth: STROKE_WIDTH,
                        strokeLinejoin: "round",
                    }}
                />
            ),
            color: "#CA9A37",
        },
        {
            label: "Громадська діяльність",
            icon: (
                <GroupsIcon
                    sx={{
                        fontSize: FONT_SIZE,
                        color: "#C9E7E7",
                        stroke: "#4F7F7A",
                        strokeWidth: STROKE_WIDTH,
                        strokeLinejoin: "round",
                    }}
                />
            ),
            color: "#99D0CA",
        },
        {
            label: "Релігія",
            icon: (
                <ChurchIcon
                    sx={{
                        fontSize: FONT_SIZE,
                        color: "#F3ECD9",
                        stroke: "#8F836D",
                        strokeWidth: STROKE_WIDTH,
                        strokeLinejoin: "round",
                    }}
                />
            ),
            color: "#EDE1C9",
        },
        {
            label: "Інше",
            icon: (
                <MoreHorizIcon
                    sx={{
                        fontSize: FONT_SIZE,
                        color: "#DFE1E4",
                        stroke: "#686A6E",
                        strokeWidth: STROKE_WIDTH,
                        strokeLinejoin: "round",
                    }}
                />
            ),
            color: "#CACBCE",
        },
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
            { threshold: 0.3 },
        );

        if (BoxRef.current) observer.observe(BoxRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <Box sx={{ marginY: "200px" }}>
            <Typography sx={{ fontSize: { xs: 28, md: 32, lg: 34 } }} variant="h4" gutterBottom>
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
                {categoryData.map((elem, index) => {
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
                                    "&:hover": {
                                        boxShadow: 8,
                                        scale: 1.01,
                                    },
                                    width: { xs: "47%", lg: "18%" },
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    marginBottom: "40px",
                                    cursor: "pointer",
                                    padding: "10px",
                                    borderBottom: `14px solid ${elem.color}`,
                                }}
                            >
                                <Link
                                    href={`/biographies?page=1&categories=${elem.label}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start",
                                        alignItems: "center",
                                        marginTop: "12px",
                                    }}
                                >
                                    <Box sx={{ backgroundColor: elem.color, borderRadius: "50%", padding: "30px" }}>
                                        {elem.icon}
                                    </Box>

                                    <Typography variant="h6" sx={{ marginTop: "16px", marginBottom: "6px", textAlign: "center" }}>
                                        {elem.label}
                                    </Typography>
                                </Link>
                            </Paper>
                        </Slide>
                    );
                })}
            </Box>
        </Box>
    );
}

export default CategoryCards;
