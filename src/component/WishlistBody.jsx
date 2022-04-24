import { useContext } from "react"
import { UseWishlistContext } from "../context/wishlist-context";
import { Rating } from 'react-simple-star-rating'
import { useCartContext } from "../context/cart-context";


export const WishlistBody= () =>{

const {PostWishlist,  wishlist} = UseWishlistContext();
const {PostCart} = useCartContext();
    if(wishlist === "" || wishlist === undefined)
    {

    return (
        <div className="main-products">
    <h1>Nothing In the Wishlist Yet</h1>
    </div>)}
    else{
        return (
           <div className="wishlist-main">
            <div className="font-color-primary heading2 position-absolute">Wishlist</div>
            <div className="comodities d-flex justify-content-center flex-wrap">

       
        {wishlist.map((prod,key)=>{
            return (
           <li className="product-list"  key={prod.id} >
                    <div className="card card-product border-radius-sm margin-8 d-flex justify-center align-items-center">
                    <div className="position-relative">
                        <img className="card-img-main card-img-main-product border-radius-sm margin-16 "
                            src={prod.image} alt="food"/>
                                   
                         
                       
                        <i
                            className="material-icons btn btn-icon  position-absolute card-icon-dismiss btn-danger-outline wish"
                         
                            
                            onClick={()=>{

                                const isInWishlist = wishlist.findIndex((item)=>item.id === prod.id)
                               
                                PostWishlist(prod,isInWishlist)
                                }}
                            >
                                
                                {wishlist!==""?(wishlist.findIndex((item)=>item.id === prod.id))!==-1?'favorite':'favorite_outlined':'favorite_outlined'}</i>

                    </div>
                    <div className="card-primary">
                        <div className="card-title text-color-primary font-weight-bold">{prod.title}</div>
                        <h2 className="card-subtitle"><span className="text-muted">₹</span>{prod.price}/{prod.quantity}</h2>
                        <Rating initialValue={prod.rating} readonly={true} className='material-icons-rating'  size={20}/>
                    </div>

                    <div className="card-action">
                        <div  key={key}  className="btn border-radius-sm btn-primary w-100 margin-none text-align-center addtocart w-100"
                            onClick={()=>{
                                    PostWishlist(prod,key)
                                    PostCart(prod)

                            }}
                        > Move to cart
                        </div>
                    </div>
                </div>
                    </li>)})}
        </div></div>)
        }
    }
