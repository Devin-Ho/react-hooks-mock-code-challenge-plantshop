import React, {useState} from "react";

function PlantCard({plantListing}) {
  const {id, name, image, price} = plantListing
  const [stock, setStock] = useState(true)

  function handleStock () {
    setStock(!stock)
  }

  return (
    <li className="card" onClick = {handleStock}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
