"use client";

import { Box, Button, Card, CardActionArea, CardActions, CardContent, Divider, Grow, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

function ShortBiographyCards() {
    const cardsContent = [
        {
            street: "Василя Стуса",
            shortBiography:
                "Названо на честь українського поета-шістдесятника, перекладача, дисидента, члена Української Гельсінської групи, борця за незалежність України у XX столітті. Одного із найактивніших представників українського дисидентського руху.",
            link: "#",
        },
        {
            street: "Георгія Ґонґадзе",
            shortBiography:
                "Названо на честь журналіста, українського громадського діяча, опозиційного журналіста, радіо та телеведучого, кінорежисера та перекладача грузинського походження.",
            link: "#",
        },
        {
            street: "Гліба Бабіча",
            shortBiography:
                "Названо на честь українського поета, автора пісень, блогера, учасника російсько-української війни і громадського діяча.",
            link: "#",
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
            { threshold: 0.7 }
        );

        if (BoxRef.current) observer.observe(BoxRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <Box
            ref={BoxRef}
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 2,
            }}
        >
            {cardsContent.map((card, index) => {
                return (
                    <Grow key={index} in={visible} {...{ timeout: 1000 * (index + 1) }}>
                        <Card
                            sx={{
                                width: { lg: "32%", xs: "100%" },
                                display: "flex",

                                flexDirection: "column",
                            }}
                        >
                            <CardActionArea
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    "&:hover": {
                                        backgroundColor: "action.selectedHover",
                                    },
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, width: "100%" }}>
                                    <Typography variant="h5" component="div">
                                        Вул. {card.street}
                                    </Typography>
                                    <Divider sx={{ marginY: "7px" }} />
                                    <Typography variant="body2" color="text.secondary">
                                        {card.shortBiography}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href={card.link} size="small">
                                    Дізнатися більше
                                </Button>
                            </CardActions>
                        </Card>
                    </Grow>
                );
            })}
        </Box>
    );
}

export default ShortBiographyCards;
