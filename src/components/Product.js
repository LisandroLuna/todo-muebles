import React from 'react';
import '../assets/Product.css';
import ItemCount from "./ItemCount";

class Product extends React.Component{

    addItem = () => {
        console.log("Items added to cart!");
    }

    render(){
        return (
            <div className="card ml-auto mr-auto mt-5 mb-5">
                <div className="card-body">
                    <h5 className="card-title">Ropero</h5>
                    <p className="card-text">Ropero de pino con 3 puertas.</p>
                    <ItemCount initial={1} min={0} max={15} onAdd={this.addItem}/>
                </div>
            </div>
        );
    }
}

export default Product;
