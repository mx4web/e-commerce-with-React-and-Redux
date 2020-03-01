import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.style.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingBag className='shopping-bag' />
<span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
