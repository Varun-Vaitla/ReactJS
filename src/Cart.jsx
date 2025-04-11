import React from 'react';
import Navbar from './Navbar';


const Cart = ({ cartItems }) => {
  return (
    <div>
        <Navbar></Navbar>
         <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
    </div>
   
  );
};

export default Cart;
