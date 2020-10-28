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
            const item = this.state.itemNumber + 1;
            this.setState({ itemNumber: item});
        }
    }

    discount = () => {
        if(this.state.itemNumber > this.props.min){
            const item = this.state.itemNumber - 1;
            this.setState({ itemNumber: item});
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
