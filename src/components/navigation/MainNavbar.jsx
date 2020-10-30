import React from "react";
import "./MainNavbarStyles.css";
import FreelyLogo from "../../layout/layoutImages/FreelyLogoTransparent.png";
import { Link } from "react-router-dom";
import LoginModal from "../login/LoginModal";
import useModal from "../login/useModal";

const MainNavbar = () => {
  const { isShowing, toggle } = useModal();

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
              <li>
                <button className="loginBtn" onClick={toggle}>
                  Login
                </button>
                <LoginModal isShowing={isShowing} hide={toggle} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default MainNavbar;
