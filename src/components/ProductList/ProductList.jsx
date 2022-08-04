import {Products, ProductsActions} from "../provider/Provider";
import Product from "../Product/Product";
import styles from "./productList.module.css";


const ProductList = () => {

    const allProducts = Products();
    const dispatch = ProductsActions();

    const renderProducts = () => {
        if(allProducts.length === 0){
            return ;
        }else{
            return (
                allProducts.map((product , index) => {
                    return <Product
                    img={product.image}
                    title={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    decrement={() => dispatch({type : "decrement" , event : product.id})}
                    increment={() => dispatch({type : "increment" , event : product.id})}
                    remove={() => dispatch({type : "remove" , event : product.id})}
                    key={index}
                    />
                })
            )
        }
    }

    return (  
        <section className={styles.productList}>
            {renderProducts()}
        </section>
    );
}
 
export default ProductList;

