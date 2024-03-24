import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteListing, searchValue}) {

  const listingMap = listings.map((listing) => (
    <ListingCard deleteListing={deleteListing} key={listing.id} listing={listing} id={listing.id}/>
  ))

  return (
    <main>
      <ul className="cards">
        {listingMap}
      </ul>
    </main>
  );
}

export default ListingsContainer;
