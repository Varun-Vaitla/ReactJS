import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Puma Running Shoes',
    description: 'Comfortable shoes for daily jogging.',
    image: '/shoes.webp',
    price: 120, // in USD
  },
  {
    id: 2,
    name: 'Puma Hoodie',
    description: 'Warm black hoodie with Puma logo.',
    image: '/hoody.jpeg',
    price: 90, // in USD
  },
  {
    id: 3,
    name: 'Puma Backpack',
    description: 'Stylish and spacious backpack.',
    image: '/bag.jpeg',
    price: 75, // in USD
  },
  {
    id: 4,
    name: 'Puma Cap',
    description: 'Cool cap for sunny days.',
    image: '/cap.jpeg',
    price: 30, // in USD
  },
  {
    id: 5,
    name: 'Puma Track Pants',
    description: 'Lightweight and comfortable pants.',
    image: '/pants.jpeg',
    price: 60, // in USD
  },
];

const Product = () => {
  const navigate = useNavigate();
  const exchangeRate = 82; // 1 USD = 82 INR

  // Function to handle adding product to cart
  const handleAddToCart = (product) => {
    // Get current cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the product already exists in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // Update existing item
      existingItem.quantity += 1;
      existingItem.totalPrice += product.price;
    } else {
      // Add new item to cart
      cartItems.push({ ...product, quantity: 1, totalPrice: product.price });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Immediately navigate to the cart page
    navigate('/cart');
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} height="200px" width="150px" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>Price: ₹{(product.price * exchangeRate).toFixed(2)}</strong></p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
