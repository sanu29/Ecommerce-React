import { UseOrderContext } from "../context/order-context";
import "../pages/Auth/auth.css"
export function OrderBody() {

    const {order} = UseOrderContext();
    const ListOfOrder = () =>{
         if(order === [] || order === "" || order === undefined|| order.length <1)
        {
            return <h2 className="font-color-primary margin-16">You have not ordered anything yet... </h2>
        }
        else{
 
            return order.map((element)=>{
               return( 
                      <div className="padding-32 border-1 border-color-gray border-radius-md w-100" key={element._id}> 
                       <div className="margin-top-1 para4 "><b>Order Id </b>: {element._id}</div>
                       <div className="margin-top-1 para4"><b>Shiping Address </b>: {element.address}</div>
                       <div className="d-flex-column justify-content-center w-100 align-items-center margin-top-1 w-100">
                         {(element.cart).map((item)=>{
                         return (
                            <div className="w-100 order-list border-radius-sm  d-flex-row align-items-center justify-content-between flex-wrap ">
                            <div className="position-relative d-flex justify-content-center align-items-center">
                            <img className="card-img-cart border-radius-sm" src={item.image} alt={item.title}/>
                            </div>
                            <div className="d-flex-column card-main">
                            <div className="card-primary">
                                <div className="text-align-center  para4 font-weight-bolder">{item.title}</div>
                                <h2 className="para5 font-weight-bolder margin-4 text-align-center">₹ {item.price}/{item.quantity} </h2>
                              </div>

                            </div>
                            <div className="card-primary">
                                <div className="text-align-center  para4 font-weight-bolder">Quantity</div>
                                <h2 className="para5 font-weight-bolder margin-4 text-align-center"> {item.qty} </h2>
                              </div>
                              <div className="card-primary">
                                <div className="text-align-center  para4 font-weight-bolder">Price</div>
                                <h2 className="para5 font-weight-bolder margin-4 text-align-center">₹ {item.price}/{item.quantity} </h2>
                              </div>
                            </div>

                         )
                     })}
                    </div>
                                
                  
                
                </div>)
            })
        }
    }

    return <div className="profile-main padding-32 w-100 border-radius-md">
        <div className="font-color-primary heading-2 margin-32 w-100"  >Order Management</div>
           {ListOfOrder()}
  
   </div>
}

