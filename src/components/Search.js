import React from "react";

function Search({searchValue, setSearchValue, handleSearch}) {

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(searchValue);
  }

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
