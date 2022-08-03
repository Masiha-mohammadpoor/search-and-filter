import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import Provider from "./components/provider/Provider";
import Search from "./common/Search/Search";
// import ProductList from "./ProductList/ProductList";


const App = () => {

    return (
            <Provider>
            <Navbar/>
            <Search/>
            <ProductList/>
            </Provider>
    );
}
 
export default App;