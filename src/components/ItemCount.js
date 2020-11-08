import React, { useState } from 'react';
import '../assets/ItemCount.css';

function ItemCount(props){
    // Declaro props
    const { initial, min, max, onAdd } = props;

    // Declaro contador
    const [itemNumber, setItemNumber] = useState(initial);

    return(
        <div className="col text-center m-2">
            <p>
                <button className="btn btn-success ml-auto" onClick={() => setItemNumber(itemNumber + 1)} disabled={itemNumber === max}>+</button>
                <b value={itemNumber} className="m-4">{itemNumber}</b>
                <button className="btn btn-danger mr-auto" onClick={() => setItemNumber(itemNumber - 1)} disabled={itemNumber === min}>-</button>
            </p>
            <div className="col text-center">
                <button onClick={() => onAdd()} className="btn btn-info ml-auto mr-auto">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;
