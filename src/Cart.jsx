import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const exchangeRate = 82; // 1 USD = 82 INR

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleIncreaseQuantity = (productId) => {
    const updated = cartItems.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + 1;
        return { ...item, quantity: newQty, totalPrice: item.price * newQty };
      }
      return item;
    });
    updateCart(updated);
  };

  const handleDecreaseQuantity = (productId) => {
    const updated = cartItems.map(item => {
      if (item.id === productId && item.quantity > 1) {
        const newQty = item.quantity - 1;
        return { ...item, quantity: newQty, totalPrice: item.price * newQty };
      }
      return item;
    });
    updateCart(updated);
  };

  const handleRemoveItem = (productId) => {
    const filtered = cartItems.filter(item => item.id !== productId);
    updateCart(filtered);
  };

  const handleBuyNow = () => {
    navigate('/payment');
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id} style={{ marginBottom: '20px' }}>
              <img src={item.image} alt={item.name} height="100px" width="100px" />
              <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>Price: ₹{(item.price * exchangeRate).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p><strong>Total: ₹{(item.totalPrice * exchangeRate).toFixed(2)}</strong></p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>➕</button>
                  <button onClick={() => handleDecreaseQuantity(item.id)} disabled={item.quantity === 1}>➖</button>
                  <button onClick={() => handleRemoveItem(item.id)}>❌ Remove</button>
                </div>
              </div>
            </div>
          ))}
          <h3 style={{ marginTop: '20px' }}>
            Total Cart Price: ₹{(calculateTotalPrice() * exchangeRate).toFixed(2)}
          </h3>
          <button onClick={handleBuyNow} style={{ marginTop: '20px' }}>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
