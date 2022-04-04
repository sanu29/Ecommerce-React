import axios from "axios";
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";


const ProductContext = createContext()
const useProductContext =()=> useContext(ProductContext);



function ProductContextProvider({children})
{
    const [products, setProducts] = useState('loading')
    useEffect(()=>{
     
         (async () =>{

              const response = await axios.get("/api/products")  
              setProducts(response.data.products)
         })()   
    },[])

    return(
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductContextProvider, useProductContext}