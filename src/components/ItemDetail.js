import '../assets/ItemDetail.css';
import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail(props) {

    const { item } = props;


    return (
        <div className="wrapper row">
            <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                        <img src={item.image} alt={item.title}/>
                    </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img
                        src={item.image} alt={item.title}/></a>
                    </li>
                </ul>
            </div>
            <div className="details col-md-6">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-description">{item.descL}</p>
                <h4 className="price">Precio: <span>${item.price}</span></h4>
                <ItemCount initial={1} min={1} max={10} onAdd={item} home={0}/>
            </div>
        </div>
    );
}

export default ItemDetail;