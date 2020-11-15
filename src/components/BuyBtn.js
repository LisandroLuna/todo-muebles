import React from "react";

function BuyItem(props){
    const { count, onAdd, home } = props;
    return (
        <div className="col text-center">
            <button
                onClick={() => onAdd(count)}
                className="btn btn-info ml-auto mr-auto">
                {home === 1? "Agregar al Carrito: " + count : "Comprar: " + count}
            </button>
        </div>
    );
}

export default BuyItem;