import axios from "axios";
import { createContext,useContext,useReducer,useState ,useEffect} from "react";
import { FilterFunction } from "../component/FilterFunction";
import { useProductContext } from "./products-context";

const FilterContext = createContext();
const useFilterContext = ()=>useContext(FilterContext);

function FilterContextProvider ({children})

{  
    const [state, dispatch] = useReducer(FilterFunction,{
        dairy : true,
        staples : true,
        vegetables :true,
        fruits: true,
        snacks:true,
        sprouts:true,
        dryfruits:true,
        spices:true,
        nonveg:true,
        lowtohigh: false,
        hightolow: false,
        rating : 1,
        search :"",
        remove :'false'
    })
    return(
        <FilterContext.Provider value={{state,dispatch}}>
            {children}
         </FilterContext.Provider>
        )
}

export { FilterContext, useFilterContext, FilterContextProvider}