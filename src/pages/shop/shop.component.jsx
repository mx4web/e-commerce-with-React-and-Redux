import React from 'react';
import SHOP_DATA from './shop.data.js';

import Collection from '../../components/collection/collection.component';

export default class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        return (
            <div className='shop-page'>
                {this.state.collections.map(({ id, ...otherCollectionProps }) => (
                    <Collection key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}
