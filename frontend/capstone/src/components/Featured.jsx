import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <h3>Featured Discounts</h3>
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
