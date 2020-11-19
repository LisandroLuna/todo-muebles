import React, {useEffect} from "react";
import { useCartContext } from  "../contexts/cartContext";

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

function BuyItem(props){
    const { count, onAdd, home } = props;
    return (
        <div className="col text-center">
            <CartAddItem count={count} item={onAdd} home={home} />
        </div>
    );
}

export default BuyItem;