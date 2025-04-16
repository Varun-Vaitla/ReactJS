
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Product from './Product';
import Cart from './Cart';
import PaymentSteps from './PaymentSteps';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('user');
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: 'product', element: <Product handleAddToCart={handleAddToCart} /> },
        { path: 'cart', element: <ProtectedRoute element={<Cart cartItems={cartItems} />} /> },
        { path: 'payment', element: <ProtectedRoute element={<PaymentSteps />} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
