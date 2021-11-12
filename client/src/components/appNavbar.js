import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    NavItem
} from 'reactstrap';
import '../css/navbar.css';

class AppNavbar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavLink to="/" className="logo">Intelistyle</NavLink>
                <nav
                >
                    <NavItem>
                        <NavLink className="nav-text" activeClassName="selected-nav"
                            to="/tshirts"
                        >
                            T-shirts
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-text" activeClassName="selected-nav" to="/jeans">
                            Jeans
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-text" activeClassName="selected-nav"
                            to="/hats"
                        >
                            Hats
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-text" activeClassName="selected-nav"
                            to="/jumpers"
                        >
                            Jumpers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-text" activeClassName="selected-nav"
                            to="/shoes">
                            Shoes
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-text" activeClassName="selected-nav"
                            to="/socks"
                        >
                            Socks
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-text" activeClassName="selected-nav"
                            to="/coats"
                        >
                            Coats
                        </NavLink>
                    </NavItem>
                </nav>
            </div>
        )
    }
}



export default AppNavbar;