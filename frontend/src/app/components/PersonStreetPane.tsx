"use client";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

// set z-index so streets named after people appear above other streets
function PersonStreetPane() {
    const map = useMap();

    useEffect(() => {
        map.createPane("personStreet");
        const pane = map.getPane("personStreet");
        if (pane) {
            pane.style.zIndex = "500";
        }
    }, []);

    return null;
}

export default PersonStreetPane;
