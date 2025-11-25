import React, { useEffect, useState } from "react";
import { GeoJSON, MapContainer } from "react-leaflet";
import "./MainMap.css";
import { Feature, GeoJsonProperties, Geometry } from "geojson";
import { Layer } from "leaflet";
import axios from "axios";
import PersonBiographyPopup from "./PersonBiographyPopup";
import ReactDOMServer from "react-dom/server";
import PersonStreetPane from "./PersonStreetPane";

function MainMap() {
    const [data, setData] = useState<GeoJSON.FeatureCollection<Geometry, GeoJsonProperties> | null>(null);
    const [namedAfterPeopleStreets, setNamedAfterPeopleStreets] = useState<Array<string>>([]);

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

    const onEach = (feature: Feature<Geometry>, layer: Layer) => {
        if (feature.properties && feature.properties.name && namedAfterPeopleStreets?.includes(feature.properties?.name)) {
            layer.bindPopup("", { maxWidth: 210 });

            layer.on("mouseover", () => {
                (layer as any).setStyle({
                    color: "#00FF7F",
                    weight: 6,
                });
            });

            layer.on("mouseout", () => {
                (layer as any).setStyle({
                    color: "#66CDAA",
                    weight: 4.5,
                });
            });

            layer.on("click", () => {
                getStreetData(feature.properties?.name).then((res) => {
                    if (res?.data.person) {
                        layer.setPopupContent(
                            ReactDOMServer.renderToStaticMarkup(
                                <PersonBiographyPopup
                                    personData={{
                                        photo: res?.data.person.photo,
                                        name: res?.data.person.name,
                                        short_biography: res?.data.person.short_biography,
                                    }}
                                />
                            )
                        );
                    }
                });
            });
        }
    };

    const styleGeoJson = (feature: any) => {
        if (feature.properties?.water === "river" || feature.properties?.natural === "water") {
            return {
                color: "#a0e0f7",
                fillOpacity: 1,
            };
        } else if (namedAfterPeopleStreets?.includes(feature.properties?.name)) {
            return { color: "#66CDAA", weight: 4.5, pane: "personStreet" };
        } else if (!feature.properties?.name) {
            return { weight: 0 };
        }
        return { color: "#D8D8D8", weight: 3.5, className: "other-street" };
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

    return (
        <div className="map-wrapper h-screen w-full">
            <MapContainer
                className="h-screen w-full"
                center={[46.961, 32.015]}
                zoom={12.5}
                maxZoom={17}
                minZoom={12.1}
                maxBounds={[
                    [46.78, 31.46],
                    [47.081, 32.46],
                ]}
            >
                <PersonStreetPane />
                {data && <GeoJSON data={data} onEachFeature={onEach} style={styleGeoJson} />}
            </MapContainer>
        </div>
    );
}

export default MainMap;
