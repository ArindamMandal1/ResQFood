import { useState } from "react";
import MapView from "../components/MapView";

export default function Map() {
  const [userAddress, setUserAddress] = useState("");

  return (
    <div className="h-screen w-full">
      {!userAddress ? (
        <input
          placeholder="Enter your address"
          onBlur={(e) => setUserAddress(e.target.value)}
          className="p-2 border rounded"
        />
      ) : (
        <MapView userAddress={userAddress} />
      )}
    </div>
  );
}
