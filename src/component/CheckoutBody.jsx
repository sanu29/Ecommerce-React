import { useCartContext } from "../context/cart-context"
import "../pages/cart.css"
import { UseWishlistContext } from "../context/wishlist-context";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { InCartData } from "./InCartData";
import { useState } from "react";
import { UseAddressContext } from "../context/address-context";
import { UseOrderContext } from "../context/order-context";
export const CheckoutBody = () =>{

const {PostCart, DeleteCart , cart, UpdateQuantity, DeleteEntirecart } = useCartContext()
const {PostWishlist, wishlist} = UseWishlistContext();
const [dispCart, setDispcart] = useState("none")
const [dispAddrress, setDispAddrress] = useState("none");
const [dispCheckout, setDispCheckout] = useState("none")
const [coupon, setCoupon] = useState("")
const [error, setError] = useState("")
const [couponError, setCouponError] = useState("")
const [deliveryAddress, setDeliveryAddress] = useState({id:"",finalAddress:""});
const [price, setPrice] = useState(cart.reduce((acc, item) => {
    acc =   acc + (item.qty * item.price);
     return acc}, 0)+50)
const {pincodeDes} = UseAddressContext()
const {order, setorder, addOrder} = UseOrderContext();
const {addAddress, address , removeAddress} = UseAddressContext();
const navigate = useNavigate()
const couponStruct = () =>{
    return (
        <div>
        <div className="text-align-left margin-top-1">Apply Coupon
            <p className="para4 text-muted margin-top-1">Use Instant50 for 50% Off</p>                                                    </div>
            <p className="para5 font-color-danger">{couponError}</p>
     
            <div className="d-flex align-items-center justify-content-center">

            <input type='text' className="w-100 padding-4 " onChange={(e)=>setCoupon(e.target.value)}></input>

                    <button className="btn btn-primary padding-8"
                    onClick={()=>{
                        if(coupon === 'Instant50')
                    {   
                        setPrice(Math.floor((price/100)*50))
                        setCoupon("applied")
                    }
                    else{
                        setCouponError("Invalid Coupon")
                    }
                    }}
                    >Apply</button>
            </div>

        </div>
    )
}
const ListOfAddress = () =>{
     if(address === [] || address === "" || address === undefined|| address.length <1)
    {
        return ( <>
                <h2 className="font-color-primary margin-16">You have not added any address... </h2>
              
                </>
        )
    }
    else{

        return address.map((element)=>{
           return( <div className="border-1 w-100 border-color-gray address-section border-radius-md padding-32 margin-4" key={element._id}
           onClick={()=>setDeliveryAddress({...deliveryAddress,id:element._id,finalAddress:`${element.Address} , ${element.city}, ${element.state}, ${element.pincode}`})}
           >
               <div className="d-flex justify-content-between align-items-center">
                    <div className="font-weight-bold ">{element.name}</div>
                    {deliveryAddress.id === element._id?  <div class="badge badge-primary padding-4 ">Selected</div>:<div></div>}    
                     
                                 </div>
                
                <div className="margin-top-1 para5">{element.Address} , {element.city}, {element.state}, {element.pincode}</div>

            
            </div>)
        })
    }
}

if(cart === [] || cart === "" || cart === undefined|| cart.length <1)
{
    return (
        <div className="cart-main" >
        <div className="d-flex w-100 flex-wrap">
            <div className="comodities-cart d-flex-column justify-content-center align-items-center flex-wrap">
    <h2 className="text-align-center font-color-primary ">Your Cart is Empty cannot checkout :(</h2>
    </div>
    </div>
    </div>)
}
return ( <div className="cart-main">
        <div className="d-flex-column justify-content-center align-items-center margin-16">
        <div className="w-100 d-flex-column align-items-center ">
            <div className="alert-primary w-50 padding-16 border-radius-md heading3 d-flex justify-content-between align-items-center"
                    onClick={()=>dispCart==="none"?setDispcart("block"):setDispcart("none")}
                    >
                Order Details <span className="material-icons">{dispCart==="none"?"expand_more":"expand_less"}</span>
            </div>
                {InCartData(cart, dispCart )}

            </div>

            <div className="w-100 d-flex-column align-items-center">
            <div className="alert-primary w-50 padding-16 border-radius-md heading3 d-flex justify-content-between align-items-center margin-top-1"
                     onClick={()=>dispAddrress==="none"?setDispAddrress("block"):setDispAddrress("none")}
                    >
                     Address  
                    
                     <span className="material-icons">{dispAddrress==="none"?"expand_more":"expand_less"}</span>
                     </div>   
                        <div className="card-cart d-flex w-50 flex-wrap border-radius-md margin-none" style={{display:dispAddrress}}>
                        <div className="comodities-cart border-raduis-md  w-100 bg-white  padding-16 border-radius-md d-flex-column justify-content-between align-items-center flex-wrap">
                                    {ListOfAddress()}

                                    <Link to={`/address`} className="btn btn-primary">Add New Address</Link >
                        </div>
                        </div>
                 </div>   
                 <div className="w-100 d-flex-column align-items-center">
                 <div className="alert-primary w-50 padding-16 border-radius-md heading3 d-flex justify-content-between align-items-center margin-top-1"
                     onClick={()=>{

                        (dispCheckout==="none")?setDispCheckout("block"):setDispCheckout("none")}}
                     >
                     Checkout  
                    
                     <span className="material-icons">{dispAddrress==="none"?"expand_more":"expand_less"}</span>
                </div> 
                        <div className="card-cart d-flex w-50 flex-wrap  bg-white border-radius-md margin-none " style={{display:dispCheckout}}>
                        <div className="border-raduis-md  w-100 bg-white  padding-16 border-radius-md ">
                        {error?  <div className="alert alert-danger margin-none">{error}</div> : ""}
                                   
                                    <table className=" bg-white margin-none ">
                                        <tbody>
                                            <tr>
                                                <th>Order Summary</th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <td className="text-align-left">Price</td>
                                                <td className="text-align-right">{cart.reduce((acc, item) => {
                                                      return acc + (item.qty * item.price);
                                                 }, 0)}</td>

                                            </tr>
                                                <tr>
                                                <td className="text-align-left">Delivery</td>
                                                <td className="text-align-right">50</td>
                                                </tr> <th></th><th></th>
                                                </tbody>
                                                </table>

                                                {coupon === "applied"?
                                                <>
                                                <table className="bg-white margin-none">
                                                <tr className="w-100">
                                                    <td className="text-align-left">Coupon Applied</td>
                                                    <td className="text-align-right">- {price}</td>
                                                </tr></table>
                                                </>
                                                 :couponStruct()}   
                                            
                                       
                                                
                                                 
                                                   
                                          
                                                    <table>
                                                        <tbody>
                                                 <tr className="bg-white margin-none d-flex total-row ">
                                                <td className="text-align-left w-100">Total</td>
                                                <td >{price}</td>
                                            </tr>
                                                 
                                        </tbody>
                                    </table>
                                                 
                                    
                                    <div to={`/cart`} className="btn btn-primary w-100 margin-none  text-align-center"
                                    onClick={()=>{
                                        if(deliveryAddress.finalAddress === "")
                                        {
                                                setError("Address not selected.")
                                        }
                                        else{
                                            addOrder({cart,address:deliveryAddress.finalAddress,price});
                                            DeleteEntirecart();
                                            <Navigate to={"/order"}/>
                                            navigate("/order");
                                        
                                        }

                                    }}
                                    >Place Order</div >
                                    <Link to={`/cart`} className="btn btn-gray margin-top-1 w-100 margin-none text-align-center" >Go to Cart</Link >
                        </div>
                        </div>  
                </div>



              </div>
              </div>
)}


