import React from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";
import Car from "../assets/img/Vector.png";
import { useSelector } from "react-redux";
const containerStyle = {
  width: "100%",
  height: "250px",
};

const center = {
  lat: 39.6408686,
  lng: 66.8278026,
};

const AllCurierMap = () => {
  const apiKey = "AIzaSyAgt640vavAQNsK5G0e06laoOGmOBMPmvg";

  const curiers = useSelector((state) => state.curier.curiers);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="map">
      <LoadScript>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={10}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {curiers.map((item, index) => {
            const coords = item.map_location.split(",");
            return (
              <Marker
                key={index}
                onClick={() => {
                  console.log({ id: item.id });
                }}
                position={{ lat: +coords[0], lng: +coords[1] }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(AllCurierMap);
