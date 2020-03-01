const addItemToCart = (cartItems, newItem) => {
    const existedCartItem = cartItems.find(cartItem => cartItem.id === newItem.id);

    if (existedCartItem) {
        return cartItems.map(item => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item));
    }

    return [...cartItems, { ...newItem, quantity: 1 }];
};

const removeItemFromCart = (cartItems, itemToRemove) => {
    if (itemToRemove.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === itemToRemove.id ? { ...cartItem, quantity: itemToRemove.quantity - 1 } : cartItem
    );
};

const clearItem = (cartItems, clearItem) => cartItems.filter(cartItem => cartItem.id !== clearItem.id);

export { addItemToCart, removeItemFromCart, clearItem };
