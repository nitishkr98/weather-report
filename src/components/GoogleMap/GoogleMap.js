import { useEffect, useRef } from "react";
import React from "react";

const GoogleMap = ({ lat, lon }) => {
  const ref = useRef();
  useEffect(() => {
    const google = window.google;
    new google.maps.Map(ref.current, {
      zoom: 12,
      center: { lat: lat, lng: lon },
    });
  }, [lat, lon]);

  return <div ref={ref} />;
};

export default GoogleMap;
