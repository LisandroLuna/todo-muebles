import React from 'react';
import '../assets/Product.css';
import ItemCount from "./ItemCount";

function Product() {
    return (
        <div className="card ml-auto mr-auto mt-5 mb-5">
             <div className="card-body">
                <h5 className="card-title">Ropero</h5>
                <p className="card-text">Ropero con 3 puertas de pino.</p>
                <ItemCount initial={1} min={0} max={15} onAdd=""/>
                <div className="col text-center">
                    <button className="btn btn-info ml-auto mr-auto">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
