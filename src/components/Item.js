import React from 'react';
import '../assets/Item.css';
import ItemCount from "./ItemCount";
import {NavLink} from "react-router-dom";

function Item(props){
    const { prod } = props;
    function addItem(a){
        console.log(prod.title + " - " + a + " Item(s) purchased!");
    }

    return (
        <div className="col mb-4">
            <div className="card">
                <NavLink to={"/item/" + prod.id} className="card-link">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp" className="card-img-top" alt={prod.title}/>
                </NavLink>
                <div className="card-body">
                    <NavLink to={"/item/" + prod.id} item={prod} className="card-link">
                        <h5 className="card-title">{prod.title}</h5>
                        <p className="card-text">{prod.descs}</p>
                    </NavLink>
                    <ItemCount initial={1} min={1} max={10} onAdd={addItem} home={1}/>
                </div>
            </div>
        </div>
    );
}

export default Item;
