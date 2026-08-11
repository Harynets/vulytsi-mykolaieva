import type { EmblaOptionsType } from "embla-carousel";
import { PersonInterface } from "./PersonInterface";

export type EmblaCarouselProps = {
    options?: EmblaOptionsType;
    persons: PersonInterface[] | undefined;
};
