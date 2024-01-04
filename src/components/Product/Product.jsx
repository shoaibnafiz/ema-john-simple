import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p style={{ "color": "#0E161A" }}>Price: ${price}</p>
                <p style={{ "color": "#0E161A" }}>Manufacturer: {seller}</p>
                <p style={{ "color": "#0E161A" }}>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon style={{ "margin-left": "10px" }} icon={faShoppingCart} />
            </button>
        </div >
    );
};

export default Product;