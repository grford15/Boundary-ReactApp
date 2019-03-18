import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
    <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">DashBoard</a>
        <div  id="navbarNav">
            <a className="nav-links" href="/login">Login</a>
            <a className="nav-links" href="/register">Register</a>
            <a className="nav-links" href="/users">Users</a>
            <a className="nav-links" href="/products">Products</a>
         </div>
    </nav>
    )
}

export default Navbar;