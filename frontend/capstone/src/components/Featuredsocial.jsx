import React, { useState, useEffect } from "react";
import axios from "axios";

// this is the featured listing for the social services. As I mentioned with the discounts, this category needed its own styling due to the type of opportunity.

function Featuredsocial({ category, featured }) {
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
                <strong>Services description: </strong>
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

export default Featuredsocial;
