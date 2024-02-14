import React from 'react';
import '../App.css';
import Logo from '../images/notebook.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className='nav-center-items'>
        <nav className="dropdown">Features <span className="dropdown-arrow">&#9662;</span>
          <ol className="dropdown-content">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ol>
        </nav>
        <nav className="dropdown">Community <span className="dropdown-arrow">&#9662;</span>
          <ol className="dropdown-content-co">
            <li>Notebook UI/UX</li>
            <li>Notebook React</li>
            <li>Notebook</li>
          </ol>
        </nav>
        <nav className="dropdown">Gallery</nav>
        <nav className="dropdown">Pricing</nav>
      </div>
      <div className='start-login'>
      <div className='nav-login'>login</div>
      </div>
    </div>
  );
}

export default Navbar;
