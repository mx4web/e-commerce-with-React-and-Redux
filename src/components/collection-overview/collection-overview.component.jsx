import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Collection from '../collection/collection.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <Collection key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
