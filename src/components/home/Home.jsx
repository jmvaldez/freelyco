import React from "react";
import "./HomeStyles.css";
import CampingImage from "../../layout/layoutImages/campingPlaceHolder.jpg";

export const Home = (props) => (
  <div className="shopCategoryContainer">
    <input type="image" src={CampingImage} alt="" />
    <h1 className="imageLabel">Camping</h1>
  </div>
);
