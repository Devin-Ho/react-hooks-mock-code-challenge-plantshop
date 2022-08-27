import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage () {
  const [plants, setPlants] = useState ([])
  const [searchPlant, setSearchPlant] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plant => setPlants(plant))
  })

  function handleAddPlant(newPlant) {
    const updatedPlantsArray = [...plants, newPlant];
    setPlants(updatedPlantsArray)
  }

  function handleSearch (update) {
    const updatedPlantsArray = plants.map(plant => {
      if (plant.id === update.id){
        return update;
      } else {
        return plant;
      }
    })
    setPlants(updatedPlantsArray);

  } 
  

const displayPlants = plants.filter(plant => {
  return plant.name.toLowerCase().includes(searchPlant.toLowerCase())
})
  return (
    <main>
      <NewPlantForm onAddPlant = {handleAddPlant}/>
      <Search search = {searchPlant} onSearch = {setSearchPlant}/>
      <PlantList plants = {displayPlants} searchPlant = {handleSearch}/>
    </main>
  );
}

export default PlantPage;
