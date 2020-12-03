import React, {useState, useEffect } from "react";
import {useCartContext} from "../contexts/cartContext";
import {NavLink} from "react-router-dom";
import { getFirestore } from "../firebase";


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
    const { items, size, removeItem, clearItems } = useCartContext();
    const [actSize, setActSize] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ orderId, setOrderId ] = useState("");
    const [ loading, setLoading ] = useState(true);

    function handleSubmit(event){
        event.preventDefault();
        const db = getFirestore();
        const orders = db.collection("orders");
        const order = {
            buyer: {
                name: name,
                phone: phone,
                email: email,
            },
            items: items,
            date: new Date(),
            total: totalPrice,
        }
        orders.add(order).then(function(docRef) {
            setOrderId(docRef.id);
            alert("Se creo orden con ID: " + orderId);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setLoading(false)
            clearItems();
        })
    }

    useEffect(()=>{
        setActSize(size);
        let prePrice = 0;
        items.map(i => (prePrice += i.price * i.total));
        setTotalPrice(parseFloat(prePrice).toFixed(2));
    },[size,items])

    return (
        <div className={"row"}>
            <div className={"col-lg-6 p-5"}>
            <h2>Cart List <span className="badge badge-primary badge-pill">{actSize}</span></h2>
            <ul className="list-group-flush">
                {items.length > 0 ? items.map(i => <CartItem key={i.id} item={i} del={removeItem}/>) : <p className={"lead p-5"}>Carrito vacío. Ir al <NavLink to={"/"}>Inicio</NavLink></p>}
                <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                    <NavLink to={"#"}><b>Total</b></NavLink> <b className={"ml-auto p-2 pr-5"}>${totalPrice}</b>
                </li>
            </ul>
        </div>
        <div className={"col-lg-6 p-5"}>
            <h2>Datos Personales:</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col p-3">
                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Nombre"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 p-3">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Email"/>
                    </div>
                    <div className="col-6 p-3">
                        <input type="number" onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" placeholder="Telefono"/>
                    </div>
                </div>
                <div className="text-right pt-4">
                    <button type="submit" className="btn btn-success mt-auto">Comprar</button>
                </div>
            </form>
        </div>
</div>
    );
}

export default CartDetail;