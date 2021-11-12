import React from 'react';
import '../sass/header.scss';
import logo from '../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <img src={`${logo}`} alt="Space!" className="logo" />
            <div className="rectangle"></div>
            <nav></nav>
            <ul className="nav-links">
            <NavLink className="nav-text" activeClassName="selected-nav" to='/'><li>00 HOME</li></NavLink>
            <NavLink className="nav-text" activeClassName="selected-nav" to='/destination'><li>01 DESTINATION</li></NavLink>
            <NavLink className="nav-text" activeClassName="selected-nav" to='/crew'><li>02 CREW</li></NavLink>
            <NavLink className="nav-text" activeClassName="selected-nav" to='/technology'><li>03 TECHNOLOGY</li></NavLink>
            </ul>
        </div>
    )
}

export default Header