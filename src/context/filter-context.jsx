import axios from "axios";
import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
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
        search :""
    })
    return(
        <FilterContext.Provider value={{state,dispatch}}>
            {children}
         </FilterContext.Provider>
        )
}

export { FilterContext, useFilterContext, FilterContextProvider}