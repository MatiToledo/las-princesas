import { Content, MapContainer, Root } from "./styled";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { Body, Title } from "ui/typography";
import ubic1 from "public/ubic-1.webp";
import ubic2 from "public/ubic-2.webp";
import ubic3 from "public/ubic-3.webp";
import ubic4 from "public/ubic-4.webp";
import ubic5 from "public/ubic-5.webp";
import Carousel from "components/carousel";

const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken =
  "pk.eyJ1IjoibWF0aS10b2xlZG8iLCJhIjoiY2t1cG1qam83MDJsaTMxbWc3eHVyenVkeiJ9.HkGvX59y8Azu1LzbFDoemw";

const images = [ubic1, ubic2, ubic3, ubic4, ubic5];

export default function Ubication() {
  const mapContainer = useRef(null);
  const map: any = useRef(null);
  const [lng, setLng] = useState(-64.595783);
  const [lat, setLat] = useState(-31.926606);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    new mapboxgl.Marker()
      .setLngLat([-64.595783, -31.926606])
      .addTo(map.current);
  });

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <Root>
      <Title>CAPILLA VIEJA, LOS REARTES / Valle de Calamuchita, Cordoba</Title>
      <Body>
        Nos encontramos frente al río Los Reartes, un lugar privilegiado por su
        entorno natural, sus hermosas vistas al paisaje serrano y su cercanía a
        los principales atractivos de la zona.{" "}
      </Body>
      <Content>
        <MapContainer ref={mapContainer} />
        <Carousel images={images}></Carousel>
      </Content>
    </Root>
  );
}
