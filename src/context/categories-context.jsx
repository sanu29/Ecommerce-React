import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


const CategoriesContext = createContext()


function CategoriesContextProvider({children})
{
    const [categories , setCategories] = useState()
    useEffect (() =>{
         async function getCategories(){
            try{
            const response =  await ( axios.get( '/api/categories'))
             setCategories(response.data.categories)
            }
            catch(err)
            {
                console.log(err)
            }
         }
         getCategories()
     
    },[])
    // console.log(categories)
        if(categories === undefined)
        {  
                setCategories("loading")
        }

        return(
        
        <CategoriesContext.Provider  value = {{categories}}>
            {children}
        </CategoriesContext.Provider>
    )
}
const useCategoriesContext = ()=> useContext(CategoriesContext)

export { useCategoriesContext, CategoriesContextProvider}