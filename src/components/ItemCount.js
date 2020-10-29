import React from 'react';
import '../assets/ItemCount.css';

class ItemCount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemNumber: this.props.initial,
        };
    }

    count = () => {
        if(this.state.itemNumber < this.props.max){
            this.setState({ itemNumber: this.state.itemNumber + 1});
        }
    }

    discount = () => {
        if(this.state.itemNumber > this.props.min){
            this.setState({ itemNumber: this.state.itemNumber - 1});
        }
    }

    render(){
        return(
            <div className="col text-center">
                <p><button className="btn btn-success ml-auto" onClick={this.count}>+</button>
                    <b className={"m-4"}>{this.state.itemNumber}</b>
                <button className="btn btn-danger mr-auto" onClick={this.discount}>-</button></p>
            </div>
        )
    }
}

export default ItemCount;
