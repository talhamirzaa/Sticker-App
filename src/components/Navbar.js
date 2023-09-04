import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';//to change active tabs
import './SearchSt.css'

export default function Navbar() {
  
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" id="nvnm">Stickerz</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Trending</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="SearchSt">Search A Sticker</NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
