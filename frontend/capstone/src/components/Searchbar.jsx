import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <input
        className="searchField"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by category or keyword"
      />
      <input className="searchBtn" type="submit" value="Search" />
    </form>
  );
}

export default SearchBar;
