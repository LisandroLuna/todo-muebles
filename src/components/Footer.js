import React from 'react';
import '../assets/Footer.css';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <ul className="nav justify-content-center">
                <li className="nav-item"><NavLink className="nav-link" to={"/"}>Inicio</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to={"/about-us"}>Nosotros</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to={"/categories/"}>Productos</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to={"/contact"}>Contacto</NavLink></li>
            </ul>-
            <div className="text-center">
                <a href="https://www.facebook.com" target={"_BLANK"} rel={"noreferrer"}><i className="fab fa-facebook-square"></i></a>
                <a href="https://twitter.com"><i className="fab fa-twitter-square" target={"_BLANK"} rel={"noreferrer"}></i></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram" target={"_BLANK"} rel={"noreferrer"}></i></a>
                <br/>
                <p>Desarrollado por <a href={"https://github.com/LisandroLuna/todo-muebles"} target={"_BLANK"} rel={"noreferrer"}>Lisandro Luna</a></p>
            </div>
        </footer>
    );
}

export default Footer;
