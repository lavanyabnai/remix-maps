import React, { useState } from "react";
import WorldMap from "react-world-map";

export default function YourMainComponent() {
  const [selected, setSelected] = useState("");

  const handleSelect = (selectedRegion) => {
    setSelected(selectedRegion);
  };

  return (
    <>
      <WorldMap selected={selected} onSelect={handleSelect} />
    </>
  );
}