
import { useState } from "react";
import { UseAddressContext } from "../context/address-context";
import "../pages/Auth/auth.css"
import { AddressForm } from "./AddressForm";
export function AddressBody() {



    const [addNew, setAddNew] = useState("none")
    const {address , removeAddress} = UseAddressContext();
    const ListOfAddress = () =>{
         if(address === [] || address === "" || address === undefined|| address.length <1)
        {
            return <h2 className="font-color-primary margin-16">You have not added any address... </h2>
        }
        else{
 
            return address.map((element)=>{
               return( <div className="border-1 border-color-gray  border-radius-md padding-32 margin-top-1 w-100"  key={element._id}
                 
               >
                   <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="font-weight-bold ">{element.name}</div>                  
                         <button className="btn margin-none"
                         onClick={()=>removeAddress(element._id)}
                         >Remove</button>
                    </div>
                    <div className="margin-top-1 para4">{element.mobileNumber}</div>
                    <div className="margin-top-1 para5">{element.Address} , {element.city}, {element.state}, {element.pincode}</div>

                
                </div>)
            })
        }
    }

    return <div className="profile-main padding-32 w-100 border-radius-md">
        <div className="font-color-primary heading-2 margin-32"  >Address Management</div>
        <div className="d-flex-column align-items-center w-100">
        <button className="btn btn-primary "
        onClick={()=>{
            setAddNew("block")
        }}
        style={{display:addNew==='none'?'block':'none'}}
        >Add new Address</button>
            {AddressForm(addNew,setAddNew)}

        <div className="margin-32 w-100">

           {ListOfAddress()}
        </div></div>

    </div>
}

