import axios from "axios";
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { Navigate ,useNavigate} from "react-router-dom";
import { useAuthContext } from "./auth-context";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext)
function CartContextProvider({children})
{

    const [cart, setCart] = useState()
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
        console.log("in update req")
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
                console.log(response)
                setCart(response.data.cart)
                console.log(prod)
            } catch(err)
            {
                console.log(err.response.data)
            }
    }
    const DeleteCart = async (prod) =>{
        if(isLogin)
        {

            const encodedToken = localStorage.getItem('token')
            
            console.log("indetele")
                   
                        try{
                            
                            const response = await axios({
                            method: 'delete',
                            url: `/api/user/cart/${prod._id}`,
                            headers: {
                                authorization: encodedToken,
                            }
                         }

                        )
                         console.log(response.data.cart)
                        setCart(response.data.cart)

                    } catch(err)
                    {
                        console.log(err.response.data)
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

                    } catch(err)
                    {
                        console.log(err.response.data)
                    }
        }
      
        else{
            <Navigate replace to={'/login'}/>
            navigate("/login")
        }   
        } 



    return(
        <CartContext.Provider value={{PostCart, cart, UpdateQuantity, DeleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider, useCartContext}