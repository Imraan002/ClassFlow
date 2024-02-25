// SignUpPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css'; // Import custom CSS for additional styling

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="full-height">
      <div className="container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
              <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role:</label>
              <select id="role" className="form-select" value={role} onChange={handleRoleChange}>
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="professor">Professor</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
          <div className="mt-3">
            <Link to="/login" className="link-login">Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
