import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';

import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='item-image'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='item-name'>{name}</div>
            <div className='item-quantity'>
                <span className='arrow' onClick={() => removeItem(cartItem)}>
                    &#10094;
                </span>
                {quantity}
                <span className='arrow' onClick={() => addItem(cartItem)}>
                    &#10095;
                </span>
            </div>
            <div className='item-price'>${price}</div>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItem(item)),
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);
