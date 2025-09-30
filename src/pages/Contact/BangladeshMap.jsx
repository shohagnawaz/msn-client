import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const districts = [
  { name: "Dhaka", lat: 23.8103, lng: 90.4125 },
  { name: "Chattogram", lat: 22.3569, lng: 91.7832 },
  { name: "Khulna", lat: 22.8456, lng: 89.5403 },
  { name: "Rajshahi", lat: 24.3745, lng: 88.6042 },
  { name: "Sylhet", lat: 24.8949, lng: 91.8687 },
  { name: "Barishal", lat: 22.701, lng: 90.3535 },
  { name: "Rangpur", lat: 25.7439, lng: 89.2752 },
  { name: "Mymensingh", lat: 24.7471, lng: 90.4203 },
];

function FlyToDistrict({ selected }) {
  const map = useMap();

  if (selected) {
    map.flyTo([selected.lat, selected.lng], 10, { duration: 1.5 }); // zoom in
  }

  return null;
}

const BangladeshMap = () => {
  const [query, setQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  // ✅ To control popup opening
  const markerRefs = useRef({});

  const handleSearch = () => {
    if (!query.trim()) return;

    // Find first matching district (case-insensitive, partial match allowed)
    const match = districts.find((d) =>
      d.name.toLowerCase().includes(query.toLowerCase())
    );

    if (match) {
      setSelectedDistrict(match);

      // Open the popup after zoom
      setTimeout(() => {
        if (markerRefs.current[match.name]) {
          markerRefs.current[match.name].openPopup();
        }
      }, 500);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        We are available in 8 division.
      </h1>

      {/* ✅ Search Box */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search district..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-64 mr-2"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      {/* map container */}
      <div className="h-[600px] w-full rounded-lg shadow-lg">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {districts.map((district, idx) => (
            <Marker key={idx} position={[district.lat, district.lng]}>
              <Popup>
                <strong>{district.name}</strong> <br />
                Our branch is here.
              </Popup>
            </Marker>
          ))}

          {/* ✅ Fly to selected district */}
          <FlyToDistrict selected={selectedDistrict} />
        </MapContainer>
      </div>
    </div>
  );
};

export default BangladeshMap;
