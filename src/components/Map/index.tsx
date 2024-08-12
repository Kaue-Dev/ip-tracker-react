import { MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

interface MapProps {
  position: [number, number];
}

export const Map = ({position}: MapProps) => {
  return (
    <MapContainer
      center={position}
      zoom={4}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/bright-v2/256/{z}/{x}/{y}.png?key=TPp5wUzJEMBSmf0jnev5"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <Marker position={position} />
    </MapContainer>
  );
};