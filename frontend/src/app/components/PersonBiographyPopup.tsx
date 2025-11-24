import Link from "next/link";
import React from "react";
import "./PersonBiographyPopup.css";

interface PersonData {
    photo: string;
    name: string;
    short_biography: string;
}

interface Props {
    personData: PersonData;
}

function PersonBiographyPopup({ personData }: Props) {
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
