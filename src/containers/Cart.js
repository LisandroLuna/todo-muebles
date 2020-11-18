import React, {useEffect, useState} from "react";
import { useCartContext } from  "../contexts/cartContext";

function CartItem(props){
    const { item } = props;
    return <>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {item.title} - {item.price}
            <span className="badge badge-primary badge-pill">{item.total}</span>
        </li>
    </>
}

function Cart() {
    const { items, size } = useCartContext();
    const [actSize, setActSize] = useState(0);
    useEffect(()=>{
        setActSize(size);
    }, [size, items])
    return (
        <div>
            <h2>Cart List ({actSize})</h2>
            <ul className="list-group-flush">
                {items.map(i => <CartItem key={i.id} item={i}/>)}
            </ul>
        </div>
    );
}

export default Cart;