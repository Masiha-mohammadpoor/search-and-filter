import styles from "./product.module.css";
import {FaTrashAlt} from "react-icons/fa";


const Product = (props) => {

    const {img , title , price , quantity , decrement , increment , remove} = props;

    return ( 
        <article className={styles.product}>
            <img src={img} alt={title} className={styles.img}/>
            <div className={styles.nameAndPrice}>
                <h3>{title}</h3>
                <h4>{price} $</h4>
            </div>
            <div className={styles.btns}>
                <div className={styles.addAndRemove}>
                    <button onClick={decrement}>-</button>
                    <span style={{fontSize : "20px"}}>{quantity}</span>
                    <button onClick={increment}>+</button>
                </div>
                <div><button className={styles.deleteBtn} onClick={remove}><FaTrashAlt/></button></div>
            </div>
        </article>
    );
}
 
export default Product;