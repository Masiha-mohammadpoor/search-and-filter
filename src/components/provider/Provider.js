import { useContext , useReducer  , createContext} from "react";
import _ from "lodash";

const UseProducts = createContext();
const UseProductActions = createContext();

const productsData = JSON.parse(localStorage.getItem("products"));


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
                    return state;
                }
                else{
                    const filteredProduct = state.filter(p => p.name.toUpperCase().includes(value));
                    return filteredProduct;
                }

            }

            case "filter" : {
                if(action.value === "all"){
                    return productsData;
                }else{
                    return productsData.filter(p => p.category === action.value);
                }
            }

            case "sort" : {
                if(action.value === "lowest"){
                    const lowestSorted = _.orderBy(state, ["price"],['asc']);
                    return lowestSorted;
                }else{
                    const highestSorted = _.orderBy(state, ["price"],['desc']);
                    return highestSorted;
                }
            }

            default : {
                return state;
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