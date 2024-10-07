import React, { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./Featured";
import Discounts from "./Discounts";

function Entertainment() {
  const [discounts, setDiscounts] = useState([]);
  const category = "entertainment";

// gets the discounts in the entertainment category
  useEffect(() => {
    axios
      .get(`http://localhost:3000/discounts/category/${category}`)
      .then((response) => {
        console.log(response.data); // Verifying API response
        setDiscounts(response.data.discounts);  // Set the discounts from response
      })
      .catch((error) => {
        console.error("Error fetching discounts:", error);
      });
  }, []);

  return (
    <div className="outerContainer">
      <div className="imageContainerEntertainment"></div>
      <h1>Entertainment</h1>
      <p>
        We've scoured the web to find the best SENIOR DISCOUNTS for you! Here are some of our favorite ENTERTAINMENT DISCOUNTS.
      </p>
      <Featured category="entertainment" featured={true} />
      <Discounts category="entertainment" />
    </div>
  );
}

export default Entertainment;
