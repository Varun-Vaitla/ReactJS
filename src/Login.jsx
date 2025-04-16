
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('signupData'));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      localStorage.setItem('user', JSON.stringify(savedUser));
      alert('Login successful!');
      navigate('/product'); // redirect after login
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="login-container">
      <h2>PUMA Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

