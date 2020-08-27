import React from 'react';
import './Cart.css';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart1 = props.productCount;
    console.log(cart1);
    const total = cart1.reduce( (total, prd ) => total + prd.price, 0 )
    const totalFinal = Math.round(total)
    const tax = Math.round(total / 10)
    
    return (
        <div>
          <h4>Order Summary</h4>
          <p>Items Ordered:{props.productCount.length} </p>  
          <p>Total Price: {totalFinal}</p>
          <p>Tax: {tax}</p>
        </div>
    );
};

export default Cart;