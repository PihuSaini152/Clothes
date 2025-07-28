import React, { useState } from 'react';
import './tishirt.css';
import T1 from './t1.png'
import T3 from './t3.png'
import T2 from './t2.png'
import  Shop from  '../Shops/shop.jsx'
import  Review from  '../Reviews/reviewcard.jsx'





const product = {
  title: 'ONE LIFE GRAPHIC T-SHIRT',
  rating: 4.5,
  reviews: 451,
  price: 260,
  oldPrice: 300,
  discount: 40,
  description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  colors: ['#5C5346', '#395957', '#2C2C54'],
  sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  images: [T1,T2,T3]

};

const Tishirt = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('Small');
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <>
    <div className="tishirt-container">
      <div className="left-section">
        <div className="thumbnail-list">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumb"
              onClick={() => setSelectedImage(img)}
              className={selectedImage === img ? 'active' : ''}
            />
          ))}
        </div>
        <div className="main-image">
        <img src={selectedImage} alt="Main T-shirt" />

        </div>
      </div>

      <div className="right-section">
        <h2>{product.title}</h2>
        <div className="rating">
          <span>⭐⭐⭐⭐⭐</span>
          <span>{product.rating}/5</span>
          <span>({product.reviews} reviews)</span>
        </div>
        <div className="price">
          <span className="current">${product.price}</span>
          <span className="old">${product.oldPrice}</span>
          <span className="off">-{product.discount}%</span>
        </div>
        <p className="desc">{product.description}</p>

        <div className="color-select">
          <p>Select Colors</p>
          <div className="colors">
            {product.colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className={selectedColor === color ? 'active' : ''}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        <div className="size-select">
          <p>Choose Size</p>
          <div className="sizes">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className={selectedSize === size ? 'active' : ''}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-select">
          <button onClick={decreaseQty}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQty}>+</button>
        </div>

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
    <Review/>
    <Shop/>
    </>
  );
};



export default Tishirt;
