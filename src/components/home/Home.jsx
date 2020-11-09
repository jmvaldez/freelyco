import React from "react";
import "./HomeStyles.css";
import CampingImage from "../../layout/layoutImages/campingPlaceHolder.jpg";

export const Home = (props) => (
  <div className="row">
    <div className="column">
      <div className="card">
        <h1 className="imageLabel">Camping</h1>
        <input type="image" src={CampingImage} alt="" />
      </div>
    </div>

    <div className="column">
      <div className="card">
        <h1 className="imageLabel">Clothing</h1>
        <input type="image" src={CampingImage} alt="" />
      </div>
    </div>

    <div className="column">
      <div className="card">
        <h1 className="imageLabel">Footwear</h1>
        <input type="image" src={CampingImage} alt="" />
      </div>
    </div>
  </div>
);
