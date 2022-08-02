import {products, productsActions} from "../provider/Provider";
import Product from "../Product/Product";
import styles from "./productList.module.css";


const ProductList = () => {

    const allProducts = products();
    const dispatch = productsActions();


    console.log(allProducts);
    return (  
        <section className={styles.productList}>
            {
                allProducts.map((product , index) => {
                    return <Product
                    img={product.image}
                    title={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    key={index}/>
                })
            }
        </section>
    );
}
 
export default ProductList;