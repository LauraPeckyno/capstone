import React from "react";
import { Link } from "react-router-dom";
import { UserProvider } from "./UserContext"; // Correct import

// adding a footer with the contact, copyright, and privacy links
function Footer() {
  return (
    <>

        <footer className="footerContainer">
          <div className="footerItem">
            <small>
              © Copyright 2024, Pennsylvania Senior Discounts, L Peckyno
            </small>
          </div>
          <div className="footerItem">
            <a href="mailto:laura.peckyno@gmail.com">Contact</a>
          </div>
          <div className="footerItem">
            <a href="">Privacy</a>
          </div>
          <div className="footerItem">
            <img
              src="/logocans.png"
              width="100px"
              alt="a drawing of an elderly man holding a billfold and standing in front of a keystone"
            />
          </div>

          <Link to="/authpage?signup=true">User Page</Link>
        </footer>

    </>
  );
}

export default Footer;
