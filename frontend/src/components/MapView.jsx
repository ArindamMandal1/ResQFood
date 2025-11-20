import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const NGOMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [search, setSearch] = useState("");

  const dummyData = [
    {
      id: "1",
      name: "Restaurant SpiceHub",
      type: "Veg Meals",
      expiry: "2 Hours",
      location: "Kolkata — Salt Lake",
      coordinates: [88.4345, 22.5726],
    },
    {
      id: "2",
      name: "City Bakes",
      type: "Breads & Pastries",
      expiry: "4 Hours",
      location: "Kolkata — NewTown",
      coordinates: [88.4687, 22.5958],
    },
  ];

  useEffect(() => {
    if (map.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [88.3639, 22.5726],
      zoom: 11,
    });

    // Add markers
    dummyData.forEach((loc) => {
      const popup = new mapboxgl.Popup().setHTML(`
        <div class='p-2'>
          <p class='font-bold text-gray-900'>${loc.name}</p>
          <p class='text-sm'>${loc.type}</p>
          <p class='text-xs text-gray-600'>${loc.location}</p>
        </div>
      `);

      new mapboxgl.Marker({ color: "#32a852" })
        .setLngLat(loc.coordinates)
        .setPopup(popup)
        .addTo(map.current);
    });
  }, []);

  // Search Handler
  const handleSearch = async () => {
    if (!search) return;

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${mapboxgl.accessToken}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      map.current.flyTo({ center: [lng, lat], zoom: 13 });
    }
  };

  return (
    <div className="relative w-full h-[75vh] rounded-xl overflow-hidden shadow-lg">

      FLOATING SEARCH BAR INSIDE MAP
      <div className="absolute z-50 top-4 left-1/2 -translate-x-1/2 w-[80%] md:w-[350px] my-22">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search location…"
            className="px-3 py-2 text-sm w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="px-4 bg-green-600 text-white hover:bg-green-700 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* MAP */}
      <div ref={mapContainer} className="w-full h-full"></div>
    </div>
  );
};

export default NGOMap;


