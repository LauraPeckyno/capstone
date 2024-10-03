import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="outerContainer">
        <div className="navContainer">
          <Link to="/index" className="navItem">
            <div className="iconContainer">
              <span className="material-symbols-outlined">house</span>
            </div>
            <div className="linkText">Index</div>
          </Link>

          <Link to="/groceries" className="navItem">
            <div className="iconContainer">
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>
            <div className="linkText">Groceries</div>
          </Link>

          <Link to="/healthcare" className="navItem">
            <div className="iconContainer">
              <span className="material-symbols-outlined">ecg_heart</span>
            </div>
            <div className="linkText">Healthcare</div>
          </Link>

          <Link to="/restaurants" className="navItem">
            <div className="iconContainer">
              <span className="material-symbols-outlined">restaurant</span>
            </div>
            <div className="linkText">Restaurants</div>
          </Link>

          <Link to="/shopping" className="navItem">
            <div className="iconContainer">
              <span className="material-symbols-outlined">shopping_bag</span>
            </div>
            <div className="linkText">Shopping</div>
          </Link>

          <Link to="/telecommunications" className="navItem">
            <div className="iconContainer">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div className="linkText">Telecomm</div>
          </Link>

          <Link to="/transportation" className="navItem">
            <div className="iconContainer">
              <span className="material-symbols-outlined">commute</span>
            </div>
            <div className="linkText">Transportation</div>
          </Link>

          <Link to="/travel" className="navItem">
            <div className="iconContainer">
              <span className="material-symbols-outlined">flight</span>
            </div>
            <div className="linkText">Travel</div>
          </Link>

          <Link to="/service" className="navItem">
            <div className="iconContainer">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div className="linkText">Social Services</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
