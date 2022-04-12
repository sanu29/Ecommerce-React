import { Categories, Img } from "./images"
import { useCategoriesContext } from "../context/categories-context"
import {ThreeDots} from "react-loader-spinner";
import {Link} from "react-router-dom";
import { useProductContext } from "../context/products-context";
import { useFilterContext } from "../context/filter-context";
import { FilterCategory } from "./FilterCategory";
import { useState } from "react";
import { Rating } from 'react-simple-star-rating'
import { UseWishlistContext } from "../context/wishlist-context";
import { useCartContext } from "../context/cart-context";



export const Products = () =>{
    let {products} = useProductContext()
    const {state, dispatch} = useFilterContext();
    const [res, setRes] = useState()
    const {PostWishlist, wishlist} = UseWishlistContext();
    const {PostCart, DeleteCart , cart, UpdateQuantity } = useCartContext()

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
            class="d-flex-row justify-content-center align-items-center border-1 border-color-gray padding-none addtocart btn border-radius-sm">
    
            <button class="quantity-btn btn btn-primary margin-none w-100" onClick={(e)=>{
                console.log(cart[cartIndex].qty)
                if(cart[cartIndex].qty>1)
                {
                   UpdateQuantity(prod,'decrement')
                }
                else
                {
                    DeleteCart(prod)
                }
            }}> - </button>
            <input type="text" value={cart[cartIndex].qty} class="quantity-input" disabled/>
            <button class="quantity-btn btn btn-primary margin-none w-100"
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

     
       let filteredprods  = FilterCategory(state,products)
       if(state.hightolow === false && state.lowtohigh ===false)
       {
        filteredprods = filteredprods.sort((a,b)=>{
                 return a.id - b.id
            })}
    return (
        <>         
            <div className="main-products">
             <div className="comodities d-flex justify-content-around flex-wrap">
                 {filteredprods.map((prod,key)=>{
                    return (<li className="product-list"  key={prod.id} >
                    <div className="card card-product border-radius-sm margin-8 d-flex justify-center align-items-center">
                    <div className="position-relative">
                        <img className="card-img-main card-img-main-product border-radius-sm margin-16 "
                            src={prod.image} alt="food"/>
                                   
                         
                       
                        <i
                            className="material-icons btn btn-icon  position-absolute card-icon-dismiss btn-danger-outline wish"
                            // style={(wishlist.findIndex((item)=>item.id === prod.id))===-1?{color:'white'}:{color:'red'}}
                            
                            onClick={()=>{

                                const isInWishlist = wishlist.findIndex((item)=>item.id === prod.id)
                                console.log(isInWishlist)
                                PostWishlist(prod,isInWishlist)
                                }}
                            >
                                
                                {(wishlist!=="")?(wishlist.findIndex((item)=>item.id === prod.id))!==-1?'favorite':'favorite_outlined':'favorite_outlined'}</i>

                    </div>
                    <div className="card-primary">
                        <div className="card-title text-color-primary font-weight-bold">{prod.title}</div>
                        <h2 className="card-subtitle"><span className="text-muted">₹</span>{prod.price}/{prod.quantity}</h2>
                        <Rating initialValue={prod.rating} readonly={true} className='material-icons-rating'  size={20}/>
                    </div>

                    <div className="card-action">
                    
                         {(cart!==""&&cart!==undefined)?(cart.findIndex((item)=>item.id === prod.id))!==-1?QuantityButton(prod,key):AddToCartButton(prod,key):AddToCartButton(prod,key)}
                       
                      
                    </div>
                </div>
                    </li>)
                 
                 })}
                 
                 </div>
                 </div>
             </>
    )}
}