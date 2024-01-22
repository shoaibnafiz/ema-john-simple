import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "./ReviewItem/ReviewItem";
import './Orders.css'
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    // console.log(savedCart);

    const handleRmoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className="shop-container">
            <div className="orders-container">
                {/* <h2>Orders Page: {cart.length}</h2> */}
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRmoveFromCart={handleRmoveFromCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className="proceed-link" to='/checkout'>
                        <button className='btn-proceed'>
                            <span>Proceed Checkout</span>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;