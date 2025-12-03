import { Layer } from "leaflet";

export interface CanvasGeoJsonLayerProps {
    data: any;
    onEachFeature?: (feature: any, layer: Layer) => void;
    style?: (feature: any) => any;
}
