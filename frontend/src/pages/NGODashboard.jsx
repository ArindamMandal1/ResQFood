import { useState } from "react";
import NGOMap from "../components/MapView";

const NGODashboard = () => {
  const [address, setAddress] = useState("Saltlake sector-V");

  return (
    <div>
      <NGOMap searchAddress={address} ngoView={true}/>
    </div>
  );
};

export default NGODashboard;
