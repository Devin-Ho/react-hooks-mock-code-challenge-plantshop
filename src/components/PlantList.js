import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchPlant}) {

  return (
    <ul className="cards"> 
    {plants.map(p => {
    return (
      <PlantCard 
      key = {p.id}
      plantListing = {p}
      searchPlant = {searchPlant}
      />
    );
    })
  }
    </ul>
  );
}

export default PlantList;
