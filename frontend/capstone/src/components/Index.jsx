import React, { useState, useEffect } from "react";
import axios from "axios";
import Featuredhome from "./Featuredhome";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function Index() {
  const [featuredDiscounts, setFeaturedDiscounts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

 // getting the data by category from the database
  useEffect(() => {
    axios
      .get("http://localhost:3000/discounts/featured")
      .then((response) => {
        console.log(response.data); // Verifying API response
        setFeaturedDiscounts(response.data.discounts); // Set the discounts from response
      })
      .catch((error) => {
        console.error("Error fetching discounts:", error);
      });
  }, []);

  // handle the searchbar data request, looks for the term, if it finds the term, it will push the data tot he page instead of the featured discounts.
  // if no results are found, I'm just defaulting to the featured items (because I had trouble with the default "no results" message)
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

{/* if there are results, push them to the page, else use the featured items */}
      {searchResults.length > 0 ? (
        <SearchResults discounts={searchResults} />
      ) : (
        <Featuredhome discounts={featuredDiscounts} />
      )}
    </div>
  );
}

export default Index;
