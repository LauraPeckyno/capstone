import React, { useState, useEffect } from "react";
import axios from "axios";

function Discountssocial({ category }) {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/discounts/category/${category}`)
      .then((response) => {
        setDiscounts(response.data.discounts);
      })
      .catch((error) => {
        console.error("Error fetching discounts:", error);
      });
  }, [category]);

  return (
    <div className="discountGridContainer">
      {discounts &&
        discounts.map((discount) => (
          <div key={discount._id} className="discountGridItem">
            <h3>{discount.business}</h3>
            <p>
              <strong>Services description: </strong>
              {discount.discount}
              <br />
            </p>
            <a href={discount.url} target="_blank" rel="noopener noreferrer">
              Visit {discount.business}
            </a>
          </div>
        ))}
    </div>
  );
}

export default Discountssocial;
