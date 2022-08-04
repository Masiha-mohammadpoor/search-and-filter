import {useState} from "react";
import {ProductsActions} from "../../components/provider/Provider";
import styles from "./search.module.css";

const Search = ({filter}) => {

    const dispatch = ProductsActions();

    const [value , setValue] = useState("");

    const changeHandler = e => {
        dispatch({type : "filter" , value : filter.value});
        dispatch({type : "search" , event : e.target.value});
        setValue(e.target.value);
    }

    return (  
        <section className={styles.inputContainer}>
            <input
            className={styles.input} 
            type="text"
            onChange={changeHandler}
            placeholder="search..."
            value={value} />
        </section>
    );
}
 
export default Search;