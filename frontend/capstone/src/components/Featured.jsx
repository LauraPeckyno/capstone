import React, { useState, useEffect } from "react";
import axios from "axios";

// these are the featured discounts. I've created at least 2 per category. These could be monetized if the app was taken to the next level.
// it's basically the same as the category version, but only getting the ones with a featured value of true
function Featured({ category, featured }) {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/discounts/category/${category}/featured/${featured}`
      )
      .then((response) => {
        setDiscounts(response.data.discounts);
      })
      .catch((error) => {
        console.error("Error fetching discounts:", error);
      });
  }, [category, featured]);

  return (
    <div className="featuredContainer">
      <h3 className="featuredHeaderText">Featured Discounts</h3>
      <div className="discountGridContainer">
        {discounts &&
          discounts.map((discount) => (
            <div key={discount._id} className="discountGridItem">
              <h3>{discount.business}</h3>
              <p>
                <strong>Eligibility: </strong>
                {discount.eligibility}
                <br></br>
                <strong>Discount description: </strong>
                {discount.discount}
              </p>
              <p>
                <a
                  href={discount.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit {discount.business}
                </a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Featured;
