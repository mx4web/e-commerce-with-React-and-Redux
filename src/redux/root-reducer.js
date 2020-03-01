import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //tell redux persist to use localstorage as the default storage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root', //means we want to store things start from root reducer
    storage,
    whitelist: ['cart'], //the only reducer we want to persist is the cart
};

const rootReducer = combineReducers({
    user: userReducer, //user is handled by firebase authentication, no need to persist this
    cart: cartReducer, //we always want to persist cart
});

export default persistReducer(persistConfig, rootReducer);

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer,
// });
