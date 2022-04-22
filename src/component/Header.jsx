import {Link} from "react-router-dom"
import { useAuthContext } from "../context/auth-context"
import { UseWishlistContext } from "../context/wishlist-context";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart-context";
import { useState } from "react";
import { useFilterContext } from "../context/filter-context";
import { useCategoriesContext } from "../context/categories-context";

export const Header = () => {
    const {state, dispatch} = useFilterContext();
    const {isLogin, setisLogin, user, setUser, Logout} = useAuthContext();
    const {wishlist, setWishlist} = UseWishlistContext()
    const navigate = useNavigate();
    const {cart, setCart} = useCartContext()
    const [search, setSearch] =  useState("")
    const {categories} = useCategoriesContext();
    const [displayOptions, setDisplayOptions] = useState("none")

    const profileOptions = () =>{
        return(
            <div className="d-flex justify-content-center align-items-center position-relative ">
                <div className="heading-2 d-flex justify-content-center align-items-center username  "
                    onClick= {(e)=>{
                        if(displayOptions==="none")
                        {
                            setDisplayOptions("block")
                        }
                        else{
                            setDisplayOptions("none")
                        }
                    }}
                >
                    {(user.firstName).toUpperCase()}
                    <span class="material-icons">
                        expand_more
                        </span>
                    </div>
                    <div className="d-flex-cols bg-white position-absolute options font-color-dark " style={{display:displayOptions}}>
                    <div className="option">Profile</div>
                    <div  className="option flex-option"><Link to={'/cart'} class="position-relative">Cart</Link></div>    
                    <div  className="option  flex-option"><Link to={'/wishlist'} class="position-relative">Wishlist</Link></div>    
                    <div  className="option  flex-option">
                    <Link to={'/'} class="position-relative">Home</Link>
                        </div>    
                    <div  className="option  flex-option">
                                    {isLogin === true ? 
                                        <Link  to={'/'} onClick={()=>{Logout()}} className="align-self-center heading-3 ">Logout</Link>:
                                       <Link  to={'/login'} className="align-self-center heading-3 ">Login</Link>
                                   }     
                     </div> 
                       
                </div>
                </div>
        )
    }

    return (
        <div
        className="header-simple bg-primary d-flex-row border-radius-none padding-none  margin-none justify-content-between">

        <Link to={'/'}  className="logo">Instant-Grocery</Link>
        <div className="d-flex align-items-center text-primary border-color-gray w-100  border-radius-sm overflow-hidden search justify-content-between">
            <input type="text" className="input-sm box-shadow-none margin-none search w-100" onChange={(e)=>setSearch(e.target.value)} placeholder="Seacrh..."/>
           
           
           
            <Link to={'/product'} className="material-icons align-self-center bg-white padding-4 text-color-primary fixed-width"
            onClick={()=>{
                categories.map((item)=>{
                    dispatch({type:item.categoryName, payload:true})
                   })
                     dispatch({type:'search', payload:search})

            }}
            >search</Link>
        </div>


        <div className="d-flex-row menu-icons justify-content-end ">
        <div className={isLogin?"d-flex-row justify-content-end flex-menu-icons":"d-flex-row  justify-content-end "}>
        {isLogin === true ? 
        <Link  to={'/'} onClick={()=>{
            Logout()
        }} className="align-self-center heading-3 btn">Logout</Link>:
        <Link  to={'/login'} className="align-self-center heading-3 btn">Login</Link>
        }  



             <Link to={'/'} className="heading-3 margin-8 material-icons header-icon">home</Link>
            

            {(cart!==null&&cart!==undefined&&cart!==[]&&cart.length>0)?
               <Link to={'/cart'} class="position-relative">
                        <span className="heading-3 margin-8 material-icons header-icon">shopping_cart</span>
                     <div class=" badge-buzy badge-icon position-absolute wishlist-notification"></div>
                 </Link>
    : <Link to={'/cart'} className="heading-3 margin-8 material-icons header-icon">shopping_cart</Link>}
    


        {(wishlist!==null&&wishlist!==undefined&&wishlist!==[]&&wishlist.length>0)?
               <Link to={'/wishlist'} class="position-relative">
                        <span className="heading-3 margin-8 material-icons header-icon">favorite</span>
                     <div class=" badge-buzy badge-icon position-absolute wishlist-notification"></div>
                 </Link>
    : <Link to={'/wishlist'} className="heading-3 margin-8 material-icons header-icon">favorite</Link>}
           
           </div>
            {(isLogin)?profileOptions():null}

        </div>
    </div>

    )
}