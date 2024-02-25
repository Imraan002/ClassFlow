import React from 'react';
import logo from './pic.jpg'; // Make sure to replace this with the correct path

const HomePage = () => {
  return (
    <div className="home-page" style={{ background: 'linear-gradient(to right, #4e54c8, #8f94fb, #8f94fb, #4e54c8)', minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            <img src={logo} alt="ClassFlow Logo" className="img-fluid rounded-circle shadow-lg mb-4" style={{ width: '150px', border: '5px solid #fff' }} />
            <h1 className="display-2 text-light mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '2px', textShadow: '2px 2px #000' }}>Welcome to<br />ClassFlow</h1>
            <div className="d-grid gap-3">
              <a href="/login" className="btn btn-primary btn-lg btn-block rounded-pill fw-bold" style={{ background: '#ff7b10', borderColor: '#ff7b10', fontSize: '1.5rem' }}>Login</a>
              <a href="/signup" className="btn btn-secondary btn-lg btn-block rounded-pill fw-bold" style={{ background: '#fff', color: '#ff7b10', borderColor: '#fff', fontSize: '1.5rem' }}>Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
