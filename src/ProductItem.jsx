import styles from './ProductList.module.css';


const ProductItem = ({product, productStyles}) => {

    return (
        <div>
            
            <div className={productStyles}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} style={{ width: '150px', height: 'auto' }} />
         <p>${product.price}</p>
          <div className={styles.description}>{product.description}</div>
        </div>
</div>
    )
}

export default ProductItem
