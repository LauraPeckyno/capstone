import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Discountssocial({ category }) {
  const [discounts, setDiscounts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/discounts/category/${category}?page=${page}`)
      .then((response) => {
        setDiscounts(response.data.discounts);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error('Error fetching discounts:', error);
      });
  }, [category, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="discountGridContainer">
        {discounts &&
          discounts.map((discount) => (
            <div key={discount._id} className="discountGridItem">
              <h3>{discount.business}</h3>
              <p>
                <strong>Service description: </strong>
                {discount.discount}
                <br />
              </p>
              <a href={discount.url} target="_blank" rel="noopener noreferrer">
                Visit {discount.business}
              </a>
            </div>
          ))}
      </div>
      <div className="paginationContainer">
      <div className="pagination">
  {page > 1 && (
    <button className="pageBtn" onClick={() => handlePageChange(page - 1)}>Prev</button>
  )}
  {Array(totalPages)
    .fill(0)
    .map((_, index) => (
      <button
        key={index + 1}
        onClick={() => handlePageChange(index + 1)}
        className={`pageBtn ${page === index + 1 ? 'active' : ''}`}
      >
        {index + 1}
      </button>
    ))}
  {page < totalPages && (
    <button className="pageBtn" onClick={() => handlePageChange(page + 1)}>Next</button>
  )}
</div></div>
    </div>
  );
}

export default Discountssocial;