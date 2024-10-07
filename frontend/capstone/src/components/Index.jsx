import React, { useState, useEffect } from "react";
import axios from "axios";
import Featuredhome from "./Featuredhome";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function Index() {
  const [featuredDiscounts, setFeaturedDiscounts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/discounts/featured")
      .then((response) => {
        setFeaturedDiscounts(response.data.discounts);
      })
      .catch((error) => {
        console.error("Error fetching discounts:", error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    axios
      .get(`http://localhost:3000/discounts/search?q=${searchTerm}`)
      .then((response) => {
        setSearchResults(response.data.discounts);
      })
      .catch((error) => {
        console.error("Error searching discounts:", error);
      });
  };

  return (
    <div className="outerContainer">
      <div className="imageContainer"></div>
      <h1>Find your Pennsylvania Senior Discounts!</h1>
      <div className="hometextContainer">
        <p className="leftText">
          We've scoured the web to find some of Pennsylvania's best SENIOR DISCOUNTS for you.
          Check out the featured opportunities below. You can also browse discounts by category using the menu or search for something
          specific using the search bar.
        </p>
        <SearchBar onSearch={handleSearch} />
      </div>

      {searchResults.length > 0 ? (
        <SearchResults discounts={searchResults} />
      ) : (
        <Featuredhome discounts={featuredDiscounts} />
      )}
    </div>
  );
}

export default Index;
