import React from 'react';
import logo from '../images/logo.png';
import './App.css';

const Header = () => {
  return (
    <header id="main" className="bg-primary text-white">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#main">
            <img src={logo} alt="Logo" width="50" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#main">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pierres">Pierres</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="name text-center">
        <h1>Bienvenue chez <span>SiteWeb</span></h1>
        <div className="header-btns">
          <a href="#pierres" className="btn btn-primary">Nos pierres</a>
          <a href="#contact" className="btn btn-secondary">Nous contacter</a>
        </div>
      </div>
      <div className="arrow"></div>
    </header>
  );
};

export default Header;
