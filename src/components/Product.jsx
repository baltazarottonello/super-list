import React from 'react';

export default function Product({ product, onClick, isDisabled }) {
    return (
        <div 
            onClick={() => isDisabled && onClick(product.name)} 
            style={{ cursor: isDisabled ? 'pointer' : 'not-allowed', opacity: isDisabled ? 1 : 0.5 }}
        >
            <div>
                <h3>{product.name}</h3>
            </div>
        </div>
    );
}
