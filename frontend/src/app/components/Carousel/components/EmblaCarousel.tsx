import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import AutoScroll from "embla-carousel-auto-scroll";
import { Avatar, Box, Button, Typography } from "@mui/material";
import styles from "../styles/EmblaCarousel.module.css";
import { EmblaCarouselProps } from "@/app/types/EmblaCarouselProps";

const EmblaCarousel = ({ options, persons }: EmblaCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoScroll()]);
    const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <PrevButton onClick={onPrevButtonClick} />
            <Box sx={{ width: "93%" }}>
                <Box className={styles.embla}>
                    <Box className={styles.embla__viewport} ref={emblaRef}>
                        <Box className={styles.embla__container}>
                            {persons?.map((person, index) => (
                                <Box className={styles.embla__slide} key={index}>
                                    <Box className={styles.embla__slide__number}>
                                        <Box>
                                            <Avatar
                                                sx={{
                                                    width: { xs: 200, sm: 240 },
                                                    height: "100%",
                                                }}
                                                alt={person.name}
                                                src={person.photo}
                                                variant="rounded"
                                            />
                                        </Box>
                                        <Box className={styles.embla_person_details}>
                                            <Box className={styles.embla_text}>
                                                <Typography variant="h4">{person.name}</Typography>
                                                <Typography className={styles.embla_short_biography}>
                                                    {person.short_biography}
                                                </Typography>
                                            </Box>
                                            <Box className={styles.embla_link_button}>
                                                <Button href={`person/${person.name}`} color="success">
                                                    Дізнатися більше
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <NextButton onClick={onNextButtonClick} />
        </Box>
    );
};

export default EmblaCarousel;
