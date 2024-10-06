import React, { useState, useEffect } from "react";
import axios from "axios";
import Featuredhome from "./Featuredhome";

function Index() {
  const [featuredDiscounts, setFeaturedDiscounts] = useState([]);

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

  return (
    <div className="outerContainer">
      <div className="imageContainer"></div>
      <h1>Find your Pennsylvania Senior Discounts!</h1>
      <p>
        We've scoured the web to find the best SENIOR DISCOUNTS for you. You can find some of the best SENIOR DISCOUNTS and PROGRAMS below, or simply explore the categories for full lists.</p>
      <Featuredhome discounts={featuredDiscounts} />
    </div>
  );
}

export default Index;
