import { LatLngExpression } from "leaflet";

export interface StreetsSearchProps {
    allStreets: { name: string; coords: [number, number] }[];
    addMarkerOnMap: (coords: LatLngExpression) => void;
}
