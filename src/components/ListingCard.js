import React, { useState } from "react";

function ListingCard({listing, id, deleteListing}) {
  const [favClicked, setFavClicked] = useState(true)

  function handleFavClick() {
    setFavClicked((favClicked) => !favClicked)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => deleteListing(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favClicked === true ? (
          <button onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button value={id} onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
