import SelectComponent from "../../common/SelectComponent/SelectComponent";
import { useState } from "react";
import {ProductsActions} from "../provider/Provider";
import Search from "../../common/Search/Search";


const filterOptions = [
    {value : "all" , label : "All"},
    {value : "apartment" , label : "apartment"},
    {value : "cactus" , label : "cactus"},
    {value : "tree" , label : "tree"},
    {value :  "shrub" , label : "shrub"}
]

const sortOptions = [
    {value : "highest" , label : "highest"},
    {value : "lowest" , label : "lowest"}
]

const Filter = () => {

    const dispatch = ProductsActions();

    const [filter , setFilter] = useState(filterOptions[0]);
    const [sort , setSort] = useState("highest");

    const filterHandler = e => {
        dispatch({type : "filter" , value : e.value});
        dispatch({type : "sort" , value : sort.value});
        setFilter(e)
    }

    const sortHandler = e => {
        dispatch({type : "sort" , value : e.value});
        setSort(e)
    }

    return ( 
        <section>
            <Search filter={filter}/>
            <SelectComponent
            title="order by price:"
            value={sort}
            onChange={sortHandler}
            options={sortOptions}
            />
            <SelectComponent
            title="filter by category:"
            value={filter}
            onChange={filterHandler}
            options={filterOptions}
            />
        </section>
    );
}
 
export default Filter;