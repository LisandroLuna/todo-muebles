import React from 'react';
import '../assets/Footer.css';

function Footer() {
    return (
        <footer className="bg-dark">
            <ul className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link" href={"/"}>Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href={"#"}>Nosotros</a></li>
                <li className="nav-item"><a className="nav-link" href={"#"}>Productos</a></li>
                <li className="nav-item"><a className="nav-link" href={"#"}>Contacto</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
