import React from 'react';
import './footer.css';

import visa from './visa.png';
import mastercard from './mastercard.png';
import paypal from './paypal.png';
import applepay from './applepay.png';
import gpay from './googlepay.png';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
  
    <>
     
      
      <footer className="footer">
      <div className="footercard">
        <div className="footercard-A">
        <h1>STAY UPTO DATE ABOUT <br />
         OUR LATEST OFFERS</h1>
        </div>
        <div className="footercard-A">
            <input type="email" placeholder='Enter email' id='F-input'/>
            <br />
            <button id='Suscribebtn'>Suscribe</button>
        </div>
      </div>
    
      <div className="footer-content">
        <div className="footer-col footer-brand">
          <h3>SHOP.CO</h3>
          <p>
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>FAQ</h4>
          <ul>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

   
      <div className="footer-bottom">
        <p>Shop.co © 2000-2023. All Rights Reserved</p>
        <div className="payment-icons">
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="MasterCard" />
          <img src={paypal} alt="PayPal" />
          <img src={applepay} alt="Apple Pay" />
          <img src={gpay} alt="Google Pay" />
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
