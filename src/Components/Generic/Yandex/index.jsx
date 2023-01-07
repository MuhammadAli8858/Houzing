import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const mapStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100wh",
  height: "50vh",
  overflow: "hidden",
};

const Yandex = () => {
  return (
    <YMaps
      query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b", lang: "EN" }}
    >
      <Map style={mapStyle} state={{ center: [41.2995, 69.2401], zoom: 12 }}>
        <Placemark key={1} geometry={[41.2995, 69.2401]} />
      </Map>
    </YMaps>
  );
};

export default Yandex;
