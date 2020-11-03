import React from 'react';
import '../assets/Item.css';
import ItemCount from "./ItemCount";

function Item(props){
    const { prod } = props;
    function addItem(){
        console.log(prod.title + " - Item added to cart!");
    }

    return (
        <div className="col mb-4">
            <div className="card">
                <img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp" className="card-img-top" alt={prod.title}/>
                <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text">{prod.descs}</p>
                    <ItemCount initial={1} min={1} max={10} onAdd={addItem}/>
                </div>
            </div>
        </div>
    );
}

export default Item;
