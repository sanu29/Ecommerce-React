import axios from "axios";
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { Navigate ,useNavigate} from "react-router-dom";
import { useAuthContext } from "./auth-context";

const WishlistContext = createContext();
const UseWishlistContext = ()=> useContext(WishlistContext)




function WishlistContextProvider({children})
{  
    const {isLogin, user} = useAuthContext();
    const [wishlist, setWishlist] = useState("")
    const navigate = useNavigate()
    useEffect(async()=>{
        const response =await axios({
            method: 'get',
            url: '/api/user/wishlist',
            headers: {
                authorization: localStorage.getItem('token'),
            }})
            setWishlist(response.data.wishlist)
    })
    const PostWishlist = async (prod, isInWishlist) => {
      
        
        if(isLogin)
        {

            const encodedToken = localStorage.getItem('token')
            
           
                    if(isInWishlist=== -1)
                    {
                        try{const response = await axios({
                            method: 'post',
                            url: '/api/user/wishlist',
                            headers: {
                                authorization: encodedToken,
                            },
                            data: {
                                product: prod,
                            },
                         }

                        )
                        console.log(response.data)
                        setWishlist(response.data.wishlist)
                    } catch(err)
                    {
                        console.log(err.response.data)
                    }}
                    else{
                        try{const response =await axios({
                            method: 'delete',
                            url: `/api/user/wishlist/${prod._id}`,
                            headers: {
                                authorization: localStorage.getItem('token'),
                            }})
                            setWishlist(response.data.wishlist)
                    }catch(err)
                    {
                        console.log(err.response.data)
                    }}
                }
      
        else{
            <Navigate replace to={'/login'}/>
            navigate("/login")
        }   
        } 


    return(
        <WishlistContext.Provider value={{PostWishlist, wishlist, setWishlist}}>
            {children}
        </WishlistContext.Provider>
 
        )
}

export {WishlistContext,UseWishlistContext,WishlistContextProvider}