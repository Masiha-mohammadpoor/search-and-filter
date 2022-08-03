import { useContext , useReducer  , createContext} from "react";
import {productsData} from "../../db/productsData";

const UseProducts = createContext();
const UseProductActions = createContext();



const Provider = ({children}) => {

    const reducer = (state , action) => {
        
        switch(action.type){
            case "decrement" : {
                const index = state.findIndex(p => p.id === action.event);
                const product = {...state[index]};
                const updatedProduct = [...state];

                if(product.quantity === 1){
                    const filteredProduct = updatedProduct.filter(p => p.id !== action.event);
                    return filteredProduct;
                }        
                product.quantity--;
                updatedProduct[index] = product;
                return updatedProduct;
            }

            case "increment" : {
                const index = state.findIndex(p => p.id === action.event);
                const product = {...state[index]};
                const updatedProduct = [...state];
                product.quantity++;
                updatedProduct[index] = product;
                return updatedProduct;
            }

            case "remove" : {
                const filteredProduct = state.filter(p => p.id !== action.event);
                return filteredProduct;
            }

            case "search" : {
                const value = action.event.toUpperCase();                

                if(value === ""){
                    console.log("yes");
                    console.log(state)
                    return productsData;
                }
                else{
                    const products = [...state];
                    const filteredProduct = products.filter(p => p.name.toUpperCase().includes(value));
                    console.log(state)
                    return filteredProduct;
                }

            }
        }
    }


    const [product , setProduct] = useReducer(reducer , productsData);

    return (
        <UseProducts.Provider value={product}>
            <UseProductActions.Provider value={setProduct}>
                {children}
            </UseProductActions.Provider>
        </UseProducts.Provider>
    )
    
}
 
export default Provider;

export const Products = () =>  useContext(UseProducts);
export const ProductsActions = () =>  useContext(UseProductActions);