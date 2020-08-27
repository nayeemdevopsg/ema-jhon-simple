import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {

    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
            <img src={img} alt=""/>
            </div>
            <div>
            <h4 className="product-name">{name}</h4>
            <br/>
            <p><small className="owner">by:{seller}</small></p>
            <br />
            <p><small className="price">${price}</small></p>
            <br />
            <p><small className="price">Only {stock} is left</small></p>
            <button 
            className="button-name"
            onClick={ () => props.handleaddpro(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div> 
        </div>
    );
};

export default Product;