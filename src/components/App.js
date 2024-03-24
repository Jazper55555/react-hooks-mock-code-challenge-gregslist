import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, [])

  function deleteListing(deletedListing) {
    const newListing = listings.filter((listing) => deletedListing !== listing.id)
    setListings(newListing)
  }

  function handleSearch(value) {
    setSearchValue(value)
  }

  const filteredListings = listings.filter((listing) => 
  listing.description.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className="app">
      <Header handleSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <ListingsContainer searchValue={searchValue} deleteListing={deleteListing} listings={filteredListings}/>
    </div>
  );
}

export default App;
