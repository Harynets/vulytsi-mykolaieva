import React, { useEffect, useRef, useState } from "react";
import { GeoJSON, MapContainer } from "react-leaflet";
import styles from "../styles/MainMap.module.css";
import { Feature, GeoJsonProperties, Geometry } from "geojson";
import { LatLngExpression, Layer, Map, Marker } from "leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import axios from "axios";
import PersonBiographyPopup from "./PersonBiographyPopup";
import ReactDOMServer from "react-dom/server";
import PersonStreetPane from "./PersonStreetPane";
import CanvasGeoJsonLayer from "./CanvasGeoJsonLayer";
import StreetsSearch from "./StreetsSearch";
import { Street } from "@/app/types/Street";

function MainMap() {
    const [data, setData] = useState<GeoJSON.FeatureCollection<Geometry, GeoJsonProperties> | null>(null);
    const [namedAfterPeopleStreets, setNamedAfterPeopleStreets] = useState<Array<string>>([]);
    const [allStreets, setAllStreets] = useState<Street[]>([]);
    const [marker, setMarker] = useState<Marker>();
    const mapRef = useRef<Map | null>(null);

    const markerIcon = L.icon({
        iconUrl: icon as unknown as string,
        shadowUrl: iconShadow as unknown as string,
        iconAnchor: [11, 38],
    });

    // fetch array of street names named after persons
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/street_list?format=json`)
            .then((res) => {
                setNamedAfterPeopleStreets(
                    Array.from(res.data, (elem: { name: string }) => {
                        return elem.name;
                    })
                );
            })
            .catch((err) => {
                console.error("Error:", err.response?.status, err.response?.data);
            });
    }, []);

    useEffect(() => {
        fetch("/export.geojson")
            .then((res) => res.json())
            .then((geoJson) => setData(geoJson));
    }, []);

    // get names and coords of streets
    useEffect(() => {
        let result: Street[] = [];

        data?.features.forEach((feature) => {
            if (feature.properties && feature.properties.name && !result.some((elem) => elem.name === feature.properties?.name)) {
                if (feature.geometry.type === "LineString") {
                    const coords = feature.geometry.coordinates[Math.floor(feature.geometry.coordinates.length / 2)];
                    result.push({ name: feature.properties.name, coords: [coords[1], coords[0]] });
                }
                if (feature.geometry.type === "MultiLineString") {
                    const coords = feature.geometry.coordinates[0][0];
                    result.push({ name: feature.properties.name, coords: [coords[1], coords[0]] });
                }
            }
        });
        setAllStreets(result.sort((elem1, elem2) => elem1.name.localeCompare(elem2.name)));
    }, [data]);

    const onEach = (feature: Feature<Geometry>, layer: Layer) => {
        if (feature.properties && feature.properties.name && namedAfterPeopleStreets?.includes(feature.properties?.name)) {
            layer.bindTooltip(feature.properties.name).bindPopup(
                // popup fallback
                '<div style="height:300px; width:210px; display:flex; justify-content:center; align-items:center;">Завантаження...</div>',
                { maxWidth: 210, autoPanPadding: [60, 60] }
            );

            layer.on("mouseover", () => {
                (layer as any).setStyle({
                    color: "#00FF7F",
                    weight: 7.5,
                });
            });

            layer.on("mouseout", () => {
                (layer as any).setStyle({
                    color: "#66CDAA",
                    weight: 5,
                });
            });

            layer.on("popupopen", (event) => {
                getStreetData(feature.properties?.name).then((res) => {
                    if (!res?.data?.person) return;
                    layer.setPopupContent(
                        ReactDOMServer.renderToStaticMarkup(
                            <PersonBiographyPopup
                                personData={{
                                    photo: res.data.person.photo,
                                    name: res.data.person.name,
                                    short_biography: res.data.person.short_biography,
                                }}
                            />
                        )
                    );

                    // center popup
                    const popup = layer.getPopup();

                    const map = (event.target as any)._map;
                    if (!map) return;

                    const popupHeight = (popup as any)._container?.offsetHeight || 0;
                    const latlng = popup?.getLatLng();
                    if (!latlng) return;

                    const point = map.latLngToContainerPoint(latlng);
                    point.y -= popupHeight / 2;
                    const newLatLng = map.containerPointToLatLng(point);

                    map.panTo(newLatLng, {
                        animate: true,
                        duration: 0.9,
                        easeLinearity: 0.85,
                    });
                });
            });
        }
    };

    const styleGeoJson = (feature: any) => {
        if (feature.properties?.water === "river" || feature.properties?.natural === "water") {
            return { color: "#a0e0f7", fillOpacity: 1, className: styles["grab-surface"] };
        } else if (namedAfterPeopleStreets?.includes(feature.properties?.name)) {
            return { color: "#66CDAA", weight: 5, pane: "personStreet" };
        } else if (!feature.properties?.name) {
            return { weight: 0 };
        }
        return { color: "#D8D8D8", weight: 3.5, className: styles["grab-surface"] };
    };

    const getStreetData = (streetName: string) => {
        return axios
            .get(`http://127.0.0.1:8000/street/${streetName}?format=json`)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.error("Error:", err.response?.status, err.response?.data);
            });
    };

    const addMarkerOnMap = (coords: LatLngExpression) => {
        if (mapRef.current) {
            marker?.remove(); // remove previous marker from the map
            const newMarker = L.marker(coords, { icon: markerIcon }).addTo(mapRef.current);
            mapRef.current.setView(coords);
            setMarker(newMarker);

            newMarker.on("click", () => {
                newMarker.remove();
            });
        }
    };

    return (
        <>
            <StreetsSearch allStreets={allStreets} addMarkerOnMap={addMarkerOnMap} />
            <MapContainer
                ref={mapRef}
                className="h-screen w-full"
                center={[46.961, 32.015]}
                zoom={12.5}
                maxZoom={17}
                minZoom={12.35}
                maxBounds={[
                    [46.78, 31.46],
                    [47.081, 32.46],
                ]}
            >
                <PersonStreetPane />
                {data && <GeoJSON data={data} onEachFeature={onEach} style={styleGeoJson} />}
                {data && <CanvasGeoJsonLayer data={data} onEachFeature={onEach} style={styleGeoJson} />}
            </MapContainer>
        </>
    );
}

export default MainMap;
