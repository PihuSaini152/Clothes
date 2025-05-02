import React, { useEffect, useState, useContext, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../pages/cartcontext';
import './productlist.css';

function ProductList() {
  const [products, setproducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  const handleAddToCart = useCallback((product) => {
    addToCart(product);
  
  },[])

  return (
    <>
    <div className="prdo-h1">
    <h2>NEW ARRIVALS</h2>
    
    <div className="api">
        {products.slice(2, 6).map((product) => (
        <div key={product.id} style={{ marginBottom: '20px' }}>
            <img src={product.image}/>
            <p>${product.price}</p>
          <p>{product.title}</p>
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}

export default ProductList;
