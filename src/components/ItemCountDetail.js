import React, { useState } from 'react';
import '../assets/ItemCountDetail.css';

function ItemCountDetail(props){
    // Declaro props
    const { initial, min, max, onAdd } = props;

    // Declaro contador
    const [itemNumber, setItemNumber] = useState(initial);

    return(
        <div className="col text-center">
            <p>
                <button className="btn btn-success ml-auto" onClick={() => setItemNumber(itemNumber + 1)} disabled={itemNumber === max}>+</button>
                <b value={itemNumber} className="m-4">{itemNumber}</b>
                <button className="btn btn-danger mr-auto" onClick={() => setItemNumber(itemNumber - 1)} disabled={itemNumber === min}>-</button>
            </p>
            <div className="col text-center">
                <button onClick={() => onAdd()} className="btn btn-info ml-auto mr-auto">Comprar</button>
            </div>
        </div>
    )
}

export default ItemCountDetail;
