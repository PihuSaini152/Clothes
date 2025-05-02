import React from 'react'
import './card.css'

function card({product, addToCart}) {
  return (
   <>
   <div className="card1">
    <img src={product.image}  className='product-image' />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p className='price'>${product.price}</p>
    <button onClick={()=> addToCart(product)} className='linktag'>ADD TO CART</button>
    
   </div> 
   </>
  )
}

export default card
