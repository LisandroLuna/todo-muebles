import React, {useState, useEffect } from "react";
import {useCartContext} from "../contexts/cartContext";
import {NavLink} from "react-router-dom";

function CartItem(props){
    const { item, del } = props;
    const price = parseFloat(item.price * item.total).toFixed(2);
    return <>
        <li className="list-group-item d-flex justify-content-between align-items-center"><NavLink to={"/item/" + item.id}>
            {item.title}</NavLink> <b className={"ml-auto p-2"}>${price}</b>
            <span className="badge badge-primary badge-pill p-2">{item.total}</span><button className="btn btn-danger p-2 m-1" onClick={() => del(item)}>X</button>
        </li>
    </>
}
function CartDetail() {
    const { items, size, removeItem } = useCartContext();
    const [actSize, setActSize] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        setActSize(size);
        let prePrice = 0;
        items.map(i => (prePrice += i.price));
        setTotalPrice(parseFloat(prePrice).toFixed(2));
    })

    return (
        <div className={"col-lg-9 p-5"}>
            <h2>Cart List <span className="badge badge-primary badge-pill">{actSize}</span></h2>
            <ul className="list-group-flush">
                {items.length > 0 ? items.map(i => <CartItem key={i.id} item={i} del={removeItem}/>) : <p className={"lead p-5"}>Carrito vacío. Ir al <NavLink to={"/"}>Inicio</NavLink></p>}
                <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                    <NavLink to={"#"}><b>Total</b></NavLink> <b className={"ml-auto p-2 pr-5"}>${totalPrice}</b>
                </li>
            </ul>
        </div>
    );
}

export default CartDetail;