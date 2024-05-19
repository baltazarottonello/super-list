import React, { useEffect, useState } from "react";
import Product from "./Product";
import '../styles/List/styles.css'

export default function List(props) {
    const [change, setChange] = useState(false);
    const [products, setProducts] = useState(props.products);
    const [firstLoad, setFirstLoad] = useState(true);
    const [buttons, setButtons] = useState(true);

    const saveButton = document.querySelector('.save-button');

    useEffect(() => {
        if (firstLoad) {
            localStorage.setItem('products', JSON.stringify(products));
            setFirstLoad(false);
        } else if (change) {
            saveButton.addEventListener('click', () => {
                setButtons(true);
            })
        };
    }, [change]);


    const handleProductClick = async (productName) => {
        let updatedProducts = [...products];
        const productIndex = products.findIndex((product) => product.name === productName);
        updatedProducts[productIndex].stock = (updatedProducts[productIndex].stock === 'true') ? 'false' : 'true';
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        localStorage.setItem('updatedProduct', JSON.stringify(updatedProducts[productIndex]));
        setChange(true);
        setButtons(false);
    }

    return (
        <div className="ListLayout">
            <div className="separatorInStock"><h2>Productos en Stock</h2></div>
            <div className="inStock">
                {products.filter(product => product.stock === 'true').map(product => (
                    <Product key={product.name} product={product} isDisabled={buttons} onClick={handleProductClick} />
                ))}
            </div>
            <div className="separatorToBuy"><h2>Productos para comprar:</h2></div>
            <div className="toBuy">
                {products.filter(product => product.stock === 'false').map(product => (
                    <Product key={product.name} product={product} isDisabled={buttons} onClick={handleProductClick} />
                ))}
            </div>
        </div>
    );

}