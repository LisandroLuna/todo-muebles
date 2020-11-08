import React from 'react';
import '../assets/NavBar.css';
import CartIcon from "./CartIcon";
import logo from "../media/img/logo.svg"
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to={"/"}><img className="logo" src={logo}/></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav menu">
                    <li className="nav-item"><NavLink className="nav-link" to={"/"}>Inicio</NavLink></li>
                    <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                </ul>
                <CartIcon></CartIcon>
            </div>
        </nav>
    );
}

export default NavBar;
