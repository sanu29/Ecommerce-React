import "../../App.css"
import "./Products.css"
import {Header, Footer } from "../../component/AllComponents"
import { useParams } from "react-router-dom"
import { useProductContext } from "../../context/products-context"
import { ThreeDots } from "react-loader-spinner"
import { Rating } from "react-simple-star-rating"
import { useCartContext } from "../../context/cart-context"
import { UseWishlistContext } from "../../context/wishlist-context"
import { useAuthContext } from "../../context/auth-context"
export const ProductMainPage = () => 
{
    const {products} = useProductContext()
    const id = useParams().productId;
    const {PostCart, DeleteCart , cart, UpdateQuantity } = useCartContext()
    const {PostWishlist, wishlist} = UseWishlistContext();
    const {isLogin} = useAuthContext();
    const AddToCartButton = (prod,key)=>{
        return(
            <div  key={key}  className="btn border-radius-sm btn-primary w-100 margin-none text-align-center addtocart w-100"
            onClick={()=>{
                PostCart(prod)
            }}
            >                    
            Add to cart
            </div>
        )
    }
      const QuantityButton = (prod,key) =>{

        const cartIndex = cart.findIndex((c)=>c._id === prod._id)
    
        return (
            <div
            className="d-flex flex-wrap-row justify-content-center align-items-center border-1 border-color-gray padding-none addtocart btn border-radius-sm">
    
            <button className="quantity-btn btn btn-primary margin-none w-100" onClick={(e)=>{
               
                if(cart[cartIndex].qty>1)
                {
                   UpdateQuantity(prod,'decrement')
                }
                else
                {
                    DeleteCart(prod)
                }
            }}> - </button>
            <input type="text" value={cart[cartIndex].qty} className="quantity-input" disabled/>
            <button className="quantity-btn btn btn-primary margin-none w-100"
             onClick={()=>{
                UpdateQuantity(prod,'increment')
            }}> + </button>
    
        </div>
        )
    }
    if(products === 'loading')
    {
            return <ThreeDots color="#2BAD60" height="100" width="100" /> 
    }
    else{          
         const prodData = products.filter((item)=>item._id === id)[0]
        return (

            <>
                <Header/>
                <div className="cart-main" >
                <div className="d-flex flex-wrap  justify-content-center  w-100 flex-wrap ">
                <div className="d-flex flex-wrap justify-content-center align-items-start">
                <div className="product-single-image margin-32 position-relative">
                    <img src={prodData.image} className="w-100 product-single-image box-shadow-md border-radius-md"  alt={prodData.title}/>
                    <i className="material-icons btn btn-icon  position-absolute card-icon-dismiss btn-danger-outline wish"
                        onClick={()=>{
                                let isInWishlist = -1
                                if(!isLogin)
                                {
                                     isInWishlist = -1
                                }
                                else{
                                     isInWishlist = wishlist.findIndex((item)=>item.id === prodData.id)
                                }
                                PostWishlist(prodData,isInWishlist)
                                }}
                            >   {(wishlist!=="")?(wishlist.findIndex((item)=>item.id === prodData.id))!==-1?'favorite':'favorite_outlined':'favorite_outlined'}</i>
                </div>
                 <div className=" d-flex-column flex-wrap justify-content-center margin-32 ">
                
                    <div className="heading2 font-color-primary">{(prodData.title)}</div>
                   <div className="heading3 text-muted text-align-left ">{prodData.categoryName}</div>
                   <div className="heading3 text-muted text-align-left w-100 border-bottom border-color-gray ">
                        <Rating initialValue={prodData.rating} readonly={true} className='material-icons-rating w-100 text-align-left'  size={30}/>
                    </div>
                    <div className="margin-top-1 heading3 w-100 text-align-center">₹ {prodData.price}/{prodData.quantity}</div>
                    <div className="card-action margin-top-1 w-100">
                    
                    {(cart!==""&&cart!==undefined)?(cart.findIndex((item)=>item.id === prodData.id))!==-1?QuantityButton(prodData,prodData.id):AddToCartButton(prodData,prodData.id):AddToCartButton(prodData,prodData.id)}
            </div>
                </div>
                </div>
                </div>
                <div className="text-align-center"> Delivery time will vary according to the Area and Trafic</div> 
                </div>
                
                <Footer/>
    
            </>
        )
    }

}