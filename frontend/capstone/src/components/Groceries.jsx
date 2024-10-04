import React from "react";

function Groceries() {
  return (
    <>
      <div className="outerContainer">
        <div className="imageContainerGroceries"></div>
        <h1>Groceries</h1>
        <p>
          We've scoured the web to find the best SENIOR DISCOUNTS for you!
          Select a category to see a list of discounts available.
        </p>
        <h2>Featured Discounts</h2>
        <div className="discountGridContainer">
          <div className="discountGridItem"></div>
          <div className="discountGridItem"></div>
        </div>
      </div>
    </>
  );
}

export default Groceries;
