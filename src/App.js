import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import Provider from "./components/provider/Provider";
import Filter from "./components/Filter/Filter";
import Data from "./db/productsData";
// import ProductList from "./ProductList/ProductList";


const App = () => {

    return (
            <Provider>
            <Data/>
            <Navbar/>
            <Filter/>
            <ProductList/>
            </Provider>
    );
}
 
export default App;