import React from 'react';
import '../assets/Footer.css';

function Footer() {
    return (
        <footer>
            <ul className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link" href={"/"}>Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href={"#"}>Nosotros</a></li>
                <li className="nav-item"><a className="nav-link" href={"#"}>Productos</a></li>
                <li className="nav-item"><a className="nav-link" href={"#"}>Contacto</a></li>
            </ul>
            <div className="text-center">
                <a href="#"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-twitter-square"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </footer>
    );
}

export default Footer;
