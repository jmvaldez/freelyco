import React from "react";
import "./MainNavbarStyles.css";
import FreelyLogo from "../../layout/layoutImages/FreelyLogo.jpg";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <React.Fragment>
      <header className="navBg">
        <div>
          <img src={FreelyLogo} alt="App Logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default MainNavbar;
