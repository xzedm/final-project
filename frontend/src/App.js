import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
  <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">store</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Routes>
          <Route path="/products/:id" element={<ProductScreen />} />
          <Route path="/" exact={true} element={<HomeScreen />} />
        </Routes>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}


export default App;
