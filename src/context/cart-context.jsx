import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Navigate ,useNavigate} from "react-router-dom";
import { Toast } from "../component/Toast";
import { useAuthContext } from "./auth-context";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext)
function CartContextProvider({children})
{

    const [cart, setCart] = useState("")
    const {isLogin, user} = useAuthContext();
    const navigate = useNavigate()


    useEffect(async()=>{
        const response =await axios({
            method: 'get',
            url: '/api/user/cart',
            headers: {
                authorization: localStorage.getItem('token'),
            }})
            setCart(response.data.cart)
    })

    const UpdateQuantity = async(prod,type)=>
    {
       
                try{
                    const response = await axios({
                    method: 'post',
                    url: `/api/user/cart/${prod._id}`,
                    headers: {
                        authorization: localStorage.getItem('token'),
                    },
                    data: {
                        action: {
                            type :type
                        }
                    },
                }

                )
             
                setCart(response.data.cart)
              
            } catch(err)
            {
                
            }
    }
    const DeleteCart = async (prod) =>{
        if(isLogin)
        {

            const encodedToken = localStorage.getItem('token')

                        try{
                            
                            const response = await axios({
                            method: 'delete',
                            url: `/api/user/cart/${prod._id}`,
                            headers: {
                                authorization: encodedToken,
                            }
                         }

                        )
                       
                        setCart(response.data.cart)

                    } catch(err)
                    {
                        
                    }

    }}
    const PostCart = async (prod) => {
      
        
        if(isLogin)
        {

            const encodedToken = localStorage.getItem('token')
            
           
                   
                        try{const response = await axios({
                            method: 'post',
                            url: '/api/user/cart',
                            headers: {
                                authorization: encodedToken,
                            },
                            data: {
                                product: prod,
                            },
                         }

                        )

                        setCart(response.data.cart)
                        Toast("Added To Cart Successfully")

                    } catch(err)
                    {
                    }
        }
      
        else{
            <Navigate replace to={'/login'}/>
            navigate("/login")
        }   
        } 

        const DeleteEntirecart = async () =>{
                    
        if(isLogin)
        {

            const encodedToken = localStorage.getItem('token')
            
           
                   
                        try{const response = await axios({
                            method: 'delete',
                            url: '/api/user/cart',
                            headers: {
                                authorization: encodedToken,
                            }
                         }

                        )

                        setCart(response.data.cart)

                    } catch(err)
                    {
                    }
        }}

    return(
        <CartContext.Provider value={{PostCart, cart, UpdateQuantity, DeleteCart , DeleteEntirecart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider, useCartContext}