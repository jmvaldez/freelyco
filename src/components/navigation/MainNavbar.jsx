import React from "react";
import "./MainNavbarStyles.css";
import FreelyLogo from "../../layout/layoutImages/FreelyLogoTransparent.png";
import BGImage from "../../layout/layoutImages/noah-silliman-vhInzGLpnyI-unsplash.jpg";
import { Link } from "react-router-dom";
import LoginModal from "../login/LoginModal";
import useModal from "../login/useModal";
import { Jumbotron, Container } from "reactstrap";

const MainNavbar = () => {
  const { isShowing, toggle } = useModal();

  return (
    <React.Fragment>
      <div>
        <Jumbotron
          style={{
            backgroundImage: `url(${BGImage})`,
          }}
          fluid
        >
          <Container>
            <img id="navLogo" src={FreelyLogo} alt="App Logo" />
            <ul id="navList">
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
          </Container>
        </Jumbotron>
      </div>
    </React.Fragment>
  );
};

export default MainNavbar;
