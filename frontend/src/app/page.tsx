"use client";

import React from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

export default function Home() {
    const MainMap = dynamic(() => import("./components/MainMap"), {
        ssr: false, // turn off server render
    });
    return <MainMap></MainMap>;
}
