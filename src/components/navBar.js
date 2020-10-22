import React from 'react';
import '../assets/NavBar.css';

function NavBar() {
    return (
        <ul className="menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    );
}

export default NavBar;
