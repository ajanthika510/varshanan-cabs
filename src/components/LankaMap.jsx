import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = {
  Colombo: [6.9271, 79.8612],
  Kandy: [7.2906, 80.6337],
  Sigiriya: [7.9570, 80.7603],
  Ella: [6.8667, 81.0466],
  Galle: [6.0535, 80.2210],
};

const route = [
  locations.Colombo,
  locations.Kandy,
  locations.Sigiriya,
  locations.Ella,
  locations.Galle,
];

export default function LankaMap() {
  return (
    <div className="h-screen w-full bg-[#02131f] p-6">

      <MapContainer
        center={[7.8731, 80.7718]}
        zoom={8}
        className="h-full w-full rounded-3xl"
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Route Line */}
        <Polyline
          positions={route}
          color="#22d3ee"
        />

        {/* Markers */}
        {Object.entries(locations).map(([name, coords]) => (
          <Marker key={name} position={coords} />
        ))}

      </MapContainer>

    </div>
  );
}