import React, { useContext } from 'react';
import { CartContext } from '../cartcontext';
import { FaTrashAlt } from 'react-icons/fa';
import './cart.css';

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalQuantity,
  } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
         
          <div className="cart-items-column">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-img" />

                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p>Size: Large</p>
                  <p>Color: White</p>
                  <p className="price">${item.price}</p>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button className="delete-icon" onClick={() => removeFromCart(item.id)}>
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>


          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>


            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
