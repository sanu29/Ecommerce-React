import {Link} from "react-router-dom"
import { useAuthContext } from "../context/auth-context"
import { UseWishlistContext } from "../context/wishlist-context";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart-context";
export const Header = () => {

    const {isLogin, setisLogin, user, setUser, Logout} = useAuthContext();
    const {wishlist, setWishlist} = UseWishlistContext()
    const navigate = useNavigate();
    const {cart, setcart} = useCartContext()
        
    

    return (
        <div
        className="header-simple bg-primary d-flex-row border-radius-none padding-none margin-none justify-content-between">

        <Link to={'/'}  className="logo">Instant-Grocery</Link>
        <div className="d-flex align-items-center text-primary border-color-gray border-radius-sm overflow-hidden search">
            <input type="text" className="input-sm box-shadow-none margin-none search" placeholder="Seacrh..."/>
            <div className="material-icons align-self-center bg-white padding-4 text-color-primary">search</div>
        </div>


        <div className="d-flex-row menu-icons justify-content-end">

        {isLogin === true ? 
        <Link  to={''} onClick={Logout} className="align-self-center heading-3 btn">Logout</Link>:
        <Link  to={'/login'} className="align-self-center heading-3 btn">Login</Link>
        }  
             <Link to={'/'} className="heading-3 margin-8 material-icons header-icon">home</Link>
            

            {(cart!==null&&cart!==undefined&&cart!==[]&&cart.length>0)?
               <Link to={'/cart'} class="position-relative">
                        <span className="heading-3 margin-8 material-icons header-icon">shopping_cart</span>
                     <div class=" badge-buzy badge-icon position-absolute wishlist-notification"></div>
                 </Link>
    : <Link to={'/wishlist'} className="heading-3 margin-8 material-icons header-icon">shopping_cart</Link>}
    


        {(wishlist!==null&&wishlist!==undefined&&wishlist!==[]&&wishlist.length>0)?
               <Link to={'/wishlist'} class="position-relative">
                        <span className="heading-3 margin-8 material-icons header-icon">favorite</span>
                     <div class=" badge-buzy badge-icon position-absolute wishlist-notification"></div>
                 </Link>
    : <Link to={'/wishlist'} className="heading-3 margin-8 material-icons header-icon">favorite</Link>}
           
            
            {(isLogin)?<div className="d-flex justify-content-center align-items-center"><Link to={''} className="heading-2  username  ">Hie, {(user.firstName).toUpperCase()}</Link></div>:null}
        </div>
    </div>

    )
}