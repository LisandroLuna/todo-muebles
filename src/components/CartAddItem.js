import {useCartContext} from "../contexts/cartContext";
import React from "react";

function CartAddItem(props){
    const { count, item, home } = props;
    const { addItem } = useCartContext();

    return <>
        <button
            onClick={() => addItem({...item, total: count})}
            className="btn btn-info ml-auto mr-auto">
            {home === 1? "Agregar al Carrito"  : "Comprar " + count}
        </button>
    </>
}


export default CartAddItem;