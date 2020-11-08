import '../assets/CartIcon.css';
import React from "react";
import { NavLink } from 'react-router-dom';

function CartIcon() {
    return (
        <NavLink to="/cart" className="ml-auto"><i className="fas fa-shopping-cart"></i></NavLink>
    );
}

export default CartIcon;