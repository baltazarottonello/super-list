import '../styles/Product/styles.css'

export default function Product({ product, onClick, isDisabled }) {
    return (
        <div className="ProductLayout"
            onClick={() => isDisabled && onClick(product.name)} 
            style={{ cursor: isDisabled ? 'pointer' : 'not-allowed', opacity: isDisabled ? 1 : 0.5 }}
        >
            <div className="product">
                <h3>{product.name}</h3>
            </div>
        </div>
    );
}
