import '../assets/ItemDetail.css';
import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail(props) {

    const { item } = props;

    function addItem(){
        console.log(item.title + " - Item purchased!");
    }
    return (
        <div className="wrapper row">
            <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1"><img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp"/></div>
                    <div className="tab-pane" id="pic-2"><img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp"/></div>
                    <div className="tab-pane" id="pic-3"><img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp"/></div>
                    <div className="tab-pane" id="pic-4"><img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp"/></div>
                    <div className="tab-pane" id="pic-5"><img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp"/></div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img
                        src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp"/></a></li>
                    <li><a data-target="#pic-2" data-toggle="tab"><img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp"/></a></li>
                    <li><a data-target="#pic-3" data-toggle="tab"><img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp"/></a></li>
                    <li><a data-target="#pic-4" data-toggle="tab"><img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp"/></a></li>
                    <li><a data-target="#pic-5" data-toggle="tab"><img src="https://http2.mlstatic.com/D_NQ_NP_923616-MLA40885919284_022020-O.webp"/></a></li>
                </ul>
            </div>
            <div className="details col-md-6">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-description">{item.descl}</p>
                <h4 className="price">Precio: <span>{item.price}</span></h4>
                <ItemCount initial={1} min={1} max={10} onAdd={addItem}/>
            </div>
        </div>
    );
}

export default ItemDetail;