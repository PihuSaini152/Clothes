import React from "react";
import "./dressstlye.css";
import Casual from "./casual.png";
import Formal from "./formal.png";
import Party from "./party.png";
import Gym from "./gym.png";
import { Link } from "react-router-dom";

function DressStyle() {
  return (
    <div className="dress-style-section">
      <div className="style-section2">
      <h1 className="title">BROWSE BY DRESS STYLE</h1>
     <div className="m-block">
      <div className="m-card">
        <Link to={"/casual"}><img src={Casual} className="m-cardimg" /></Link>
      </div>
      <div className="m-carda">
      <Link to={"/casual"}> <img src={Formal} className="m-cardaimg" /></Link>
        
     </div>
  
     </div>
     <div className="m-block">
      <div className="m-carda">
      <Link to={"/casual"}><img src={Party} className="m-cardaimg" /></Link>
        
      </div>
      <div className="m-card">
      <Link to={"/casual"}><img src={Gym} className="m-cardimg" /></Link>
        
     </div>
     </div>
      </div>
    </div>
  );
}

export default DressStyle;

