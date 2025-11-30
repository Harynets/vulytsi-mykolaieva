"use client";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L, { GeoJSON, Layer } from "leaflet";

interface Props {
    data: any;
    onEachFeature?: (feature: any, layer: Layer) => void;
    style?: (feature: any) => any;
}

// set padding for the map
export default function CanvasGeoJsonLayer({ data, onEachFeature, style }: Props) {
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
