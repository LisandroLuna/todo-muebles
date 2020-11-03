import React from 'react';
import '../assets/Item.css';
import ItemCount from "./ItemCount";

function Item(props){

    function addItem(){
        console.log("Items added to cart!");
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.prod.title}</h5>
                <p className="card-text">{props.prod.desc}</p>
                <ItemCount initial={1} min={1} max={10} onAdd={addItem}/>
            </div>
        </div>
    );
}

export default Item;
