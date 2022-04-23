import { useCartContext } from "../context/cart-context"
import "../pages/cart.css"
import { UseWishlistContext } from "../context/wishlist-context";
import { Link } from "react-router-dom";
export const CartBody = () =>{
    const {PostCart, DeleteCart , cart, UpdateQuantity } = useCartContext()
    const {PostWishlist, wishlist} = UseWishlistContext();
    if(cart === [] || cart === "" || cart === undefined|| cart.length <1)
    {
        return (
            <div className="cart-main" >
            <div className="d-flex w-100 flex-wrap">
                <div className="comodities-cart d-flex-column justify-content-center align-items-center flex-wrap">
        <h2 className="text-align-center font-color-primary ">Your Cart is Empty :(</h2>
        </div>
        </div>
        </div>)
    }
    return (
        <div className="cart-main" >
        <div className="d-flex w-100 flex-wrap">
            <div className="comodities-cart d-flex-column justify-content-between align-items-center flex-wrap">
            {cart.map((item,key)=>{


                return(
                    <div className="card-cart border-radius-sm  d-flex-row align-items-center justify-content-center ">
                    <div className="position-relative d-flex justify-content-center align-items-center">
                    <img className="card-img-cart border-radius-sm" src={item.image} alt={item.title}/>
                    </div>
                        <div className="d-flex-column card-main">
                            <div className="card-primary">
                                <div className="text-align-center  para4 font-weight-bolder">{item.title}</div>
                                <h2 className="para5 font-weight-bolder margin-4 text-align-center">₹ {item.price}/{item.quantity} </h2>
                              

                                    <div
                                        className="d-flex-row quantity-cart justify-content-center align-items-center border-1 border-color-gray padding-none ">

                                        <button className="quantity-btn-cart "
                                            onClick={(e)=>{
                                             
                                                if(item.qty>1)
                                                {
                                                UpdateQuantity(item,'decrement')
                                                }
                                                else
                                                {
                                                    DeleteCart(item)
                                                }
                                            }}
                                        > - </button>
                                        <input type="text" value={item.qty} className="quantity-input-cart" disabled/>
                                        <button className="quantity-btn-cart "
                                         onClick={()=>{
                                            UpdateQuantity(item,'increment')
                                        }}
                                        > + </button>

                                    </div>
                                   
                            </div>
                            </div>
                            <div className="card-action-cart margin-8 d-flex-column">
                                <div
                                    className="btn border-radius-sm bg-gray font-color-white w-100  text-align-center margin-none margin-top addtocart"
                                    onClick={()=>{
                                        const isInWishlist = wishlist.findIndex((prod)=>prod.id === item.id)
                                        PostWishlist(item,isInWishlist)
                                        DeleteCart(item)
                                    }}
                                    >
                                    Move to Wishlist</div>
                                <div className="btn margin-none border-radius-sm w-100 text-align-center "
                                    onClick={()=>{
                                        DeleteCart(item)
                                    }}
                                >Remove from cart
                                </div>
                            </div>
                         </div>
                )
            })}
        </div>
      
                <div className=" border-radius-sm margin-24 flex-wrap" >
                    <table className=" flex-wrap">
                        <tr className="table-row">
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        </tr>
                    {cart.map((item)=>{
                        return(
                            <tr className="table-row">
                            <td className="text-align-left">{item.title}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                            <td>{item.qty * item.price}</td>
                        </tr>
                        
                        )
                    })}
                     <tr className="table-row-end ">
                            <td className="font-weight-bold">
                                Grand Total
                            </td>
                            
                            <td className="font-weight-bold"></td><td></td>
                            <td className="font-weight-bold">                   
                     {cart.reduce((acc,item)=>{
                        return acc + (item.qty*item.price)
                    },0)}</td>

                        </tr>
                        
                    </table>
                    <div className="btn btn-primary w-100 text-align-center margin-none">Proceed to Checkout</div>
                    <Link to={"/product"} className="btn btn-primary w-100 text-align-center margin-none">Shop More</Link>
                </div>
                  
                  </div>
              
                  </div>
    )
}
