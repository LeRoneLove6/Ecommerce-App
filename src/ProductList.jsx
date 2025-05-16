import ProductItem from './ProductItem';
import styles from './ProductList.module.css'

const ProductList = ({allProducts}) => {


    return (
        <div className={styles.products}>
         
 {allProducts.map((product, id) => (
        <div key={id}>
            <ProductItem product={product} productStyles = {styles.productItem} />
        </div>
      ))}

        </div>
    );
};



export default ProductList;
