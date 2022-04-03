import React from 'react';

const ShowImage = ({ item }) => (
<div className='product-img' style={{height: '100px'}}>
    <img
    src={item}
    alt={item.name}
    className='mb-3'
    style={{ objectFit: 'contain', height: '100%', width: '100%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
    />
</div>
);

export default ShowImage;
