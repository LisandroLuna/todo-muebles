import React, {useState, useEffect } from "react";
import {useCartContext} from "../contexts/cartContext";
import {NavLink} from "react-router-dom";

function CartItem(props){
    const { item } = props;
    const price = parseFloat(item.price * item.total).toFixed(2);
    return <>
        <li className="list-group-item d-flex justify-content-between align-items-center"><NavLink to={"/item/" + item.id}>
            {item.title}</NavLink> <b className={"ml-auto p-2"}>${price}</b>
            <span className="badge badge-primary badge-pill p-2">{item.total}</span>
        </li>
    </>
}
function CartDetail() {
    const { items, size } = useCartContext();
    const [actSize, setActSize] = useState(0);
    useEffect(()=>{
        setActSize(size);
    }, [size, items])
    return (
        <div className={"col-lg-9 p-5"}>
            <h2>Cart List <span className="badge badge-primary badge-pill">{actSize}</span></h2>
            <ul className="list-group-flush">
                {items.length > 0 ? items.map(i => <CartItem key={i.id} item={i}/>) : <p className={"lead p-5"}>Carrito vacío. Ir al <NavLink to={"/"}>Inicio</NavLink></p>}
            </ul>
        </div>
    );
}

export default CartDetail;