import React from "react";
import Search from "./Search";

function Header({searchValue, setSearchValue, handleSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue}/>
    </header>
  );
}

export default Header;
