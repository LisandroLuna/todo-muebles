import React from "react";

function CartFinOrder(props) {
    const orderId = { props };
    return (
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Felicitaciones!</h4>
            <p>Su orden ha sido generada con el ID: <b>{orderId}</b></p>
        </div>
    );
}

export default CartFinOrder;