import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import modelImg from "./model.png"; 
import List from '../cards/productlist.jsx'
import Card from '../cards/card2.jsx'
import Dressstyle from '../../componets/cards/dressstyle/dressstyle.jsx'
import Section from '../sections/section.jsx'
import { Link } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  return (
    <>
    
      <div className="header-section">
        <div className="header-left">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
        
         <Link  to={ "/tishirt"}>  <button>Shop Now</button></Link>
          <div className="stats">
            <div>
              <h2>200+</h2>
              <p>International Brands</p>
            </div>
            <div>
              <h2>2,000+</h2>
              <p>High-Quality Products</p>
            </div>
            <div>
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="header-right">
          <img src={modelImg} id="modal"/>
        </div>
      </div>

      <div className="brand-strip">
        <p>VERSACE</p>
        <p>ZARA</p>
        <p>GUCCI</p>
        <p>PRADA</p>
        <p>Calvin Klein</p>
      </div>
      <List/>
      <Card/>
      <Dressstyle/>
      <Section/>
    </>
  );
};

export default Header;
