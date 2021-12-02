import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav({ onSearch }) {
  return (
    <nav className='navContain'>
        <NavLink  className= 'titulo' to= '/'>
        <h4>Weather App</h4>
      </NavLink>
      <NavLink className='about' to='/about'>
        <h6>About</h6>
      </NavLink>
      <SearchBar className='search' onSearch={onSearch}/>
    </nav>

  );
};

export default Nav;
