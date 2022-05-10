export const CouponStruct = (coupon, setCoupon, couponError, setCouponError, price, setPrice) => {

    return (
        <div>
            <div className="text-align-left margin-top-1">Apply Coupon
                <p className="para4 text-muted margin-top-1">Use Instant50 for 50% Off</p>                                                    </div>
            <p className="para5 font-color-danger">{couponError}</p>

            <div className="d-flex align-items-center justify-content-center">

                <input type='text' className="w-100 padding-4 " onChange={(e) => setCoupon(e.target.value)}></input>

                <button className="btn btn-primary padding-8"
                    onClick={() => {
                        if (coupon === 'Instant50') {
                            setPrice(Math.floor((price / 100) * 50));
                            setCoupon("applied");
                        }
                        else {
                            setCouponError("Invalid Coupon");
                        }
                    } }
                >Apply</button>
            </div>

        </div>
    );
};

export const ListOfAddress = (address, setDeliveryAddress, deliveryAddress) =>{


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
           onClick={()=>setDeliveryAddress({...deliveryAddress,id:element._id,finalAddress:`${element.Address} , ${element.city}, ${element.state}, ${element.pincode}`, mobileNumber : element.mobileNumber})}
           >
               <div className="d-flex justify-content-between align-items-center">
                    <div className="font-weight-bold ">{element.name}</div>
                    {deliveryAddress.id === element._id?  <div class="badge badge-primary padding-4 ">Selected</div>:<div></div>}    
                     
                                 </div>
                                 <div className="margin-top-1 para4">{element.mobileNumber}</div>
                <div className="margin-top-1 para5">{element.Address} , {element.city}, {element.state}, {element.pincode}</div>

            
            </div>)
        })
    }
}
