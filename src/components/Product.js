import React from 'react';
import '../assets/Product.css';
import ItemCount from "./ItemCount";

function Product(){

    function addItem(){
        console.log("Items added to cart!");
    }

    return (
        <div className="card ml-auto mr-auto mt-5 mb-5">
            <div className="card-body">
                <h5 className="card-title">Ropero</h5>
                <p className="card-text">Ropero de pino con 3 puertas.</p>
                <ItemCount initial={1} min={1} max={10} onAdd={addItem}/>
            </div>
        </div>
    );
}

export default Product;
