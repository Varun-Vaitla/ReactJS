// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login
// Login.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Add your login logic here (e.g., match with signup data)
  };

  return (
    <div>
        <Navbar></Navbar>
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
    </div>
    
  );
};

export default Login;
