import { useCartContext } from "../context/cart-context"
import "../pages/cart.css"
import { UseWishlistContext } from "../context/wishlist-context";
export const CartBody = () =>{
    const {PostCart, DeleteCart , cart, UpdateQuantity } = useCartContext()
    const {PostWishlist, wishlist} = UseWishlistContext();
    console.log(cart)
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
                    <div class="card-cart border-radius-sm  d-flex-row align-items-center justify-content-center ">
                    <div class="position-relative d-flex justify-content-center align-items-center">
                    <img class="card-img-cart border-radius-sm" src={item.image} alt={item.title}/>
                    </div>
                        <div class="d-flex-column card-main">
                            <div class="card-primary">
                                <div class="text-align-center  para4 font-weight-bolder">{item.title}</div>
                                <h2 class="para5 font-weight-bolder margin-4 text-align-center">₹ {item.price}/{item.quantity} </h2>
                              

                                    <div
                                        class="d-flex-row quantity-cart justify-content-center align-items-center border-1 border-color-gray padding-none ">

                                        <button class="quantity-btn-cart "
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
                                        <input type="text" value={item.qty} class="quantity-input-cart" disabled/>
                                        <button class="quantity-btn-cart "
                                         onClick={()=>{
                                            UpdateQuantity(item,'increment')
                                        }}
                                        > + </button>

                                    </div>
                                   
                            </div>
                            </div>
                            <div class="card-action-cart margin-8 d-flex-column">
                                <div
                                    class="btn border-radius-sm bg-gray font-color-white w-100  text-align-center margin-none margin-top addtocart"
                                    onClick={()=>{
                                        const isInWishlist = wishlist.findIndex((prod)=>prod.id === item.id)
                                        PostWishlist(item,isInWishlist)
                                        DeleteCart(item)
                                    }}
                                    >
                                    Add to Wishlist</div>
                                <div class="btn margin-none border-radius-sm w-100 text-align-center "
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
      
                <div class=" border-radius-sm margin-24 flex-wrap" >
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
                    <div class="btn btn-primary w-100 text-align-center margin-none">Proceed to Checkout</div>
                </div>
                  
                  </div>
              
                  </div>
    )
}
