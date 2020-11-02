import React from 'react';
import '../assets/ItemCount.css';

class ItemCount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemNumber: this.props.initial,
        };
    }

    // Cuento Items
    count = (a) =>{
        a ? this.setState({ itemNumber: this.state.itemNumber + 1}) : this.setState({ itemNumber: this.state.itemNumber - 1});
    }

    // Bloqueo botones de acuerdo Items Maximos y Minimos
    lockBtn = () =>{
        // Minimo 1 y Maximo 10
        console.log(this.state.itemNumber)
        if(this.state.itemNumber >= 10){
            document.getElementById("plusBtn").disabled = true;
        }else{
            document.getElementById("plusBtn").disabled = false;
        }
        if(this.state.itemNumber <= 1){
            document.getElementById("lessBtn").disabled = true;
        }else{
            document.getElementById("lessBtn").disabled = false;
        }
    }

    // Ejecuto al montar item
    componentDidMount(){
        this.lockBtn();
    }

    // Ejecuto al hacer cambios
    componentDidUpdate(){
        this.lockBtn();
    }

    render(){
        return(
            <div className="col text-center">
                <p>
                    <button id="plusBtn" className="btn btn-success ml-auto" onClick={() => this.count(true)}>+</button>
                    <b value={this.state.itemNumber} className={"m-4"}>{this.state.itemNumber}</b>
                    <button id="lessBtn" className="btn btn-danger mr-auto" onClick={() => this.count(false)}>-</button>
                </p>
                <div className="col text-center">
                    <button onClick={() => this.props.onAdd()} className="btn btn-info ml-auto mr-auto">Agregar al carrito</button>
                </div>
            </div>
        )
    }
}

export default ItemCount;
