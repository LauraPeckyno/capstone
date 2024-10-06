import React, { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./Featured";
import Discounts from "./Discounts";

function Entertainment() {
  const [discounts, setDiscounts] = useState([]);
  const category = "entertainment";

  useEffect(() => {
    axios
      .get(`http://localhost:3000/discounts/category/${category}`)
      .then((response) => {
        setDiscounts(response.data.discounts);
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
        We've scoured the web to find the best SENIOR DISCOUNTS for you! Select
        a category to see a list of discounts available.
      </p>
      <Featured category="entertainment" featured={true} />
      <Discounts category="entertainment" />
    </div>
  );
}

export default Entertainment;
