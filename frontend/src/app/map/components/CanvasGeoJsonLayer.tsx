"use client";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L, { GeoJSON } from "leaflet";
import { CanvasGeoJsonLayerProps } from "@/app/types/CanvasGeoJsonLayerProps";

// set padding for the map
export default function CanvasGeoJsonLayer({ data, onEachFeature, style }: CanvasGeoJsonLayerProps) {
    const map = useMap();

    useEffect(() => {
        const svgRenderer = L.svg({
            padding: 1,
        });

        const layer: GeoJSON = L.geoJSON(data, {
            onEachFeature: onEachFeature as any,
            style: style as any,
            renderer: svgRenderer,
        } as any);

        layer.addTo(map);
    }, []);

    return null;
}
