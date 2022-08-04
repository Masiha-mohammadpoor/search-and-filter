import Select from "react-select";
import styles from "./selectComponent.module.css";


const SelectComponent = ({title , ...rest}) => {
    return ( 
        <div className={styles.filter}>
            <h3 className={styles.filterTitle}>{title}</h3>
            <Select
            className={styles.selectOptions}
            {...rest}
            />
        </div>
    );
}
 
export default SelectComponent;