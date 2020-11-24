import React from 'react';
import '../assets/Footer.css';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <ul className="nav justify-content-center">
                <li className="nav-item"><NavLink className="nav-link" to={"/"}>Inicio</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to={"#"}>Nosotros</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to={"#"}>Productos</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to={"#"}>Contacto</NavLink></li>
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
