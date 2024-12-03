import React from 'react';
import './Man.css';

function Man({ ManBox, selectedProducts, handleFilter, handleClear }) {
  const ManName = [
    { id: 1, title: "Pendant" },
    { id: 2, title: "Prayer Pen" },
    { id: 3, title: "Rings" },
    { id: 4, title: "Key" },
    { id: 5, title: "Amulet" },
  ];

  return (
    <div className="man-container">
      <div className="man-section-first">
        <div className="man-ul">
          <div className="man-1">
            {ManName.map((item) => (
              <div className="man-1Item" key={item.id}>
                <p>{item.title}</p>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(item.title)}
                  onChange={() => handleFilter(item.title)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="man-price">
          <p>Price</p>
          <div className="man-input">
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" />
          </div>

          <div className="man-button">
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
      </div>

      <div className="man-section-two">
        {ManBox.length > 0 ? (
          ManBox.map((item) => (
            <div className="man-page-two" key={item.id}>
              <div className="man-img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="man-container">
                <div className="man-title-price">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>

                <div className="man-shop-heart">
                  <p>{item.shop}</p>
                  <p>{item.heart}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products selected</p>
        )}
      </div>
    </div>
  );
}

export default Man;
