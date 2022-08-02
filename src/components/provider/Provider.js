import { useContext , useReducer  , createContext} from "react";
import {productsData} from "../../db/productsData";

const useProducts = createContext();
const useProductActions = createContext();



const Provider = ({children}) => {

    const reducer = (state , action) => {
        // switch(action.type){
        //     case "increment" : {

        //     }
            
        //     case "decrement" : {

        //     }
            
        //     case "delete" : {

        //     }
            
        // }
    }


    const [product , setProduct] = useReducer(reducer , productsData);

    return (
        <useProducts.Provider value={product}>
            <useProductActions.Provider value={setProduct}>
                {children}
            </useProductActions.Provider>
        </useProducts.Provider>
    )
    
}
 
export default Provider;

export const products = () =>  useContext(useProducts);
export const productsActions = () =>  useContext(useProductActions);