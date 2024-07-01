import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <a className="navbar-brand" href="#">Litter-Tracer</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setShowLogin(true)}>Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setShowLogin(false)}>Register</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="form-container">
          <h2>{showLogin ? 'Login' : 'Register'}</h2>
          {showLogin ? (
            <div id="loginForm">
              <form action="login.php" method="POST">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" name="username" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" name="password" required />
                </div>
                <button type="submit" className="btn btn-custom btn-block">Login</button>
              </form>
              <p className="mt-3 text-center">Don't have an account? <a href="#" onClick={toggleForm}>Register here</a>.</p>
            </div>
          ) : (
            <div id="registerForm">
              <form action="register.php" method="POST">
                <div className="form-group">
                  <label htmlFor="regUsername">Username</label>
                  <input type="text" className="form-control" id="regUsername" name="regUsername" required />
                </div>
                <div className="form-group">
                  <label htmlFor="regPassword">Password</label>
                  <input type="password" className="form-control" id="regPassword" name="regPassword" required />
                </div>
                <button type="submit" className="btn btn-custom btn-block">Register</button>
              </form>
              <p className="mt-3 text-center">Already have an account? <a href="#" onClick={toggleForm}>Login here</a>.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Litter-Tracer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
