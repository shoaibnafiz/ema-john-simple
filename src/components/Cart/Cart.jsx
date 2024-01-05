import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const cart = props.cart;
    // const { cart } = props;
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice += product.price;
        totalShipping += product.shipping;
    }
    const totalTax = (totalPrice * 0.07).toFixed(2);
    const grandTotal = totalPrice + totalShipping + totalTax;
    // const reducer = (prev, current) => prev + current.price;
    // const totalPrice = reducer(cart, 0);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${totalTax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;