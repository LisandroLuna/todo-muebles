import React, { useState } from 'react';
import '../assets/ItemCount.css';

function ItemCount(props){
    // Declaro contador
    const [itemNumber, setItemNumber] = useState(props.initial);

    return(
        <div className="col text-center">
            <p>
                <button id="plusBtn" className="btn btn-success ml-auto" onClick={() => setItemNumber(itemNumber + 1)} disabled={itemNumber === props.max}>+</button>
                <b value={itemNumber} className="m-4">{itemNumber}</b>
                <button id="lessBtn" className="btn btn-danger mr-auto" onClick={() => setItemNumber(itemNumber - 1)} disabled={itemNumber === props.min}>-</button>
            </p>
            <div className="col text-center">
                <button onClick={() => props.onAdd()} className="btn btn-info ml-auto mr-auto">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;
