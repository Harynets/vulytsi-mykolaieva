import React, { useEffect, useState } from "react";
import { GeoJSON, MapContainer } from "react-leaflet";
import "./MainMap.css";
import { Feature, GeoJsonProperties, Geometry } from "geojson";
import { Layer } from "leaflet";
import axios from "axios";
import PersonBiographyPopup from "./PersonBiographyPopup";
import ReactDOMServer from "react-dom/server";

function MainMap() {
    const [data, setData] = useState<GeoJSON.FeatureCollection<Geometry, GeoJsonProperties> | null>(null);

    useEffect(() => {
        fetch("/export.geojson")
            .then((res) => res.json())
            .then((geoJson) => setData(geoJson));
    }, []);

    const onEach = (feature: Feature<Geometry>, layer: Layer) => {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup("", { maxWidth: 210 });
        }
        layer.on("click", () => {
            getStreetData(feature.properties?.name).then((res) => {
                layer.setPopupContent(
                    ReactDOMServer.renderToStaticMarkup(
                        <PersonBiographyPopup
                            personData={{
                                photo: res?.data.person.photo,
                                name: res?.data.person.name,
                                short_biography: res?.data.person.short_biography,
                            }}
                            streetName={feature.properties?.name}
                        />
                    )
                );
            });
        });
    };

    const styleGeoJson = (feature: any) => {
        if (feature.properties?.water === "river" || feature.properties?.natural === "water") {
            return { color: "#00BFFF", weight: 1 };
        } else if (!feature.properties?.name) {
            return { weight: 0 };
        }
        return { color: "#66CDAA", weight: 4.5 };
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
            <MapContainer className="h-screen w-full" center={[46.961, 32]} zoom={12.5} maxZoom={19} minZoom={9}>
                {data && <GeoJSON data={data} onEachFeature={onEach} style={styleGeoJson} />}
            </MapContainer>
        </div>
    );
}

export default MainMap;
