import axios from "axios";
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";


const ProductContext = createContext()
const useProductContext =()=> useContext(ProductContext);



function ProductContextProvider({children})
{
    const [products, setProducts] = useState('loading')
    const [singleProduct, setSingleProduct] = useState('loading')

    useEffect(()=>{
     
         (async () =>{

              const response = await axios.get("/api/products")  
              setProducts(response.data.products)
         })()   
    },[])
   

    const getProductDetails = async(id) =>{
            try{
                const response = await axios.get(`/api/products/${id}`)
                setSingleProduct(response.data)
               console.log(response.data) 
            }
            catch(err)
            {}
    }
    return(
        <ProductContext.Provider value={{products, setProducts, getProductDetails, singleProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductContextProvider, useProductContext}