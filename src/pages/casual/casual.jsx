import './casual.css';
import { FiFilter } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { CartContext } from '../../pages/cartcontext';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const LeftSidebarFilter = () => {
  const [products, setproducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);
  const [openFilter, setOpenFilter] = useState({
      price: true,
      colors: true,
      sizes: true,
      styles: true,
  });

  const toggleFilter = (key) => {
    setOpenFilter((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((result) => setproducts(result))
      .catch((error) => console.error('error', error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  }; 

  return (
    <div className="casual">
      <div className={`left-sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="sidebar-close-icon" onClick={() => setShowSidebar(false)}>
          <IoClose />
        </div>

        <p className="breadcrumb">
          <Link to="/">Home</Link> &gt; <span className="current">Casual</span>
        </p>

        <div className="filter-header">
          <h3>Filters</h3>
          <FiFilter className="filter-icon" />
        </div>

        <div className="category-section">
          {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((item) => (
            <div className="category-item" key={item}>
              <span>{item}</span>
              <span className="arrow">&gt;</span>
            </div>
          ))}
        </div>

      
        <div className="filter-section">
          <h3 className="filter-title" onClick={() => toggleFilter('price')}>
            {openFilter.price ? <FaChevronDown/> : <FaChevronRight/>} Price
          </h3>
          {openFilter.price && (
            <>
              <input type="range" min="50" max="200" className="price-slider" />
              <div className="price-values">
                <span>$50</span>
                <span>$200</span>
              </div>
            </>
          )}
        </div>

        <div className="filter-section">
          <h3 className="filter-title" onClick={() => toggleFilter('colors')}>
            {openFilter.colors ? <FaChevronDown /> : <FaChevronRight />} Colors
          </h3>
          {openFilter.colors && (
            <div className="color-options">
              {['red', 'blue', 'green', 'yellow', 'black'].map((color) => (
                <span className={`color-circle ${color}`} key={color}></span>
              ))}
            </div>
          )}
        </div>

        <div className="filter-section">
          <h3 className="filter-title" onClick={() => toggleFilter('sizes')}>
            {openFilter.sizes ? <FaChevronDown /> : <FaChevronRight />} Sizes
          </h3>
          {openFilter.sizes && (
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button key={size}>{size}</button>
              ))}
            </div>
          )}
        </div>

        <div className="filter-section">
          <h3 className="filter-title" onClick={() => toggleFilter('styles')}>
            {openFilter.styles ? <FaChevronDown /> : <FaChvronRight />} Dress Style
          </h3>
          {openFilter.styles && (
            <>
              {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
                <label key={style}>
                  <input type="checkbox" /> {style}
                </label>
              ))}
            </>
          )}
        </div>

        <button className="apply-filter-btn">Apply Filter</button>
      </div>

      <div className="rightside">
        <div className="heading-toggle">
          <h1>Casual</h1>
          <FiFilter className="toggle-icon" onClick={() => setShowSidebar(true)} />
        </div>

        <div className="api">
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.category}</h2>
              <img src={product.image} alt={product.title} />
              <h1>
                <span>$</span>
                {product.price}
              </h1>
              <p className="pragraph">{product.title}</p>
              <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebarFilter;
 