import { PersonBiographyPopupProps } from "@/app/types/PersonBiographyPopupProps";
import Link from "next/link";
import React from "react";

function PersonBiographyPopup({ personData }: PersonBiographyPopupProps) {
    return (
        <div>
            <img className="rounded" src={personData.photo}></img>
            <p className="font-bold text-xl m-0">{personData.name}</p>
            <p className="text-justify">{personData.short_biography}</p>
            <Link href={`person/${personData.name.replace(/ /g, "_")}`}>Читати більше</Link>
        </div>
    );
}

export default PersonBiographyPopup;
