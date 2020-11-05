import React from 'react';
import '../assets/NavBar.css';
import CartIcon from "./CartIcon";
import logo from "../media/img/logo.svg"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img className="logo" src={logo}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav menu">
                    <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
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
