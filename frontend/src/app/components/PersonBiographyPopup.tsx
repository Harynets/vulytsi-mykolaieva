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
    streetName: string;
}

function PersonBiographyPopup({ personData, streetName }: Props) {
    return (
        <div>
            <img className="rounded" src={personData.photo}></img>
            <p className="font-bold text-xl m-0">{personData.name}</p>
            <p className="text-justify">{personData.short_biography}</p>
            <Link href={`street/${streetName}`}>Читати більше</Link>
        </div>
    );
}

export default PersonBiographyPopup;
