import React from 'react';
import Navbar from './Navbar';


const products = [
  {
    id: 1,
    name: 'Puma Running Shoes',
    description: 'Comfortable shoes for daily jogging.',
    image: '\shoes.webp',
  },
  {
    id: 2,
    name: 'Puma Hoodie',
    description: 'Warm black hoodie with Puma logo.',
    image: '\hoody.jpeg',
  },
  {
    id: 3,
    name: 'Puma Backpack',
    description: 'Stylish and spacious backpack.',
    image: '\bag.jpeg'
  },
  {
    id: 4,
    name: 'Puma Cap',
    description: 'Cool cap for sunny days.',
    image: '\cap.jpeg',
  },
  {
    id: 5,
    name: 'Puma Track Pants',
    description: 'Lightweight and comfortable pants.',
    image: '\pants.jpeg',
  },
];

const Product = ({ handleAddToCart }) => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} height="200px" width="100px" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>

    </div>
    
  );
};

export default Product;
