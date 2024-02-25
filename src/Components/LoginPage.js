// LoginPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import custom CSS for additional styling

const LoginPage = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="full-height" style={{ background: 'linear-gradient(to right, #84fab0, #84fab0 10%, #8fd3f4 90%, #8fd3f4)' }}>
      <div className="container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role:</label>
              <select id="role" className="form-select" value={role} onChange={handleRoleChange}>
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="professor">Professor</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <div className="mt-3">
            <Link to="/signup" className="link-signup">Don't have an account? Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
