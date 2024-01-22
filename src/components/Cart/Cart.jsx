import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, handleClearCart, children }) => {
    // const cart = props.cart;
    // const { cart } = props;
    let totalPrice = 0;
    let totalShipping = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
        totalQuantity += product.quantity;
    }
    const totalTax = (totalPrice * 0.07);
    const grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${totalTax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;
Cart.propTypes = { cart: Object, handleClearCart: Function };