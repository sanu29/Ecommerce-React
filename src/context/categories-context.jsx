import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";


const CategoriesContext = createContext()


function CategoriesContextProvider({children})
{
    const [categories , setCategories] = useState()
    useEffect (() =>{
         (async ()=>
         {
            try{
                 const response =  await ( axios.get( '/api/categories'))
                 setCategories(response.data.categories)
                }
            catch(err)
                 {
  
                 }
         })()
     
    },[])
   
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