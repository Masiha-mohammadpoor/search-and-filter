import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
// import ProductList from "./components/ProductList/ProductList";
import Provider from "./components/provider/Provider";
import { productsData } from "./db/productsData";



const App = () => {

    return (
        <Provider>
            <Navbar/>
            <ProductList/>
        </Provider>
    );
}
 
export default App;