import { useState } from "react";
import { UseAddressContext } from "../context/address-context";

export function AddressForm(disp,setDisp) {

    const [name, setname] = useState("");
    const [mobileNumber, setmobileNumber] = useState("");
    const [pincode, setpinCode] = useState("");
    const [Location, setLocation] = useState("");
    const [city, setcity] = useState("");
    const [Address, setAddress] = useState("");
    const [state, setstate] = useState("");
    const [error, seterror] = useState("");
    const {addAddress, address} = UseAddressContext();


    return <div className="border-1 border-color-gray padding-16 border-radius-md " style={{ display: disp }}>
        <div className="font-color-primary heading-2 margin-16">Add New Address</div>

        {error !== "" ? <div className="alert alert-danger margin-none">{error}</div> : ""}



        <div className="address-form d-flex justify-content-evenly flex-wrap w-100 ">

            <div className="d-flex-column w-50">
                <label htmlFor="Name" className="para5  m-8 label">Name</label>
                <input type="text" id="name" className="input border-color-gray " placeholder="Name"
                    onChange={(e) => setname(e.target.value)}
                    onBlur={(e) => e.target.value === "" ? seterror("Name cannot be empty") : ""}

                    value={name} />
            </div>


            <div className="d-flex-column w-50">
                <label htmlFor="Name" className="para5  m-8 label">Pincode</label>
                <input type="text" id="pincode" className="input border-color-gray " placeholder="Pincode"
                    onChange={(e) => {
                        setpinCode(e.target.value);

                    }}
                    onBlur={(e) => e.target.value === "" || e.target.value.length !== 6 ? seterror("Pincode format incorrect") : ""}
                    value={pincode} />
            </div>

        </div>
        <div className="address-form d-flex justify-content-center  w-100 flex-wrap w-100 ">
            <div className="d-flex-column w-100">
                <label htmlFor="Name" className="para5 w-100  m-8 label">Address</label>
                <textarea className="input border-color-gray  w-100"
                    onChange={(e) => setAddress(e.target.value)}
                    value={Address}
                ></textarea>
            </div>
        </div>
        <div className="address-form d-flex justify-content-evenly flex-wrap w-100 ">

            <div className="d-flex-column w-50">
                <label htmlFor="Name" className="para5  m-8 label">City</label>
                <input type="text" id="city" className="input border-color-gray " placeholder="City"
                    onChange={(e) => setcity(e.target.value)}
                    value={city} />
            </div>

            <div className="d-flex-column w-50">
                <label htmlFor="Name" className="para5  m-8 label">State</label>
                <input type="text" id="state" className="input border-color-gray " placeholder="State"
                    onChange={(e) => setstate(e.target.value)}
                    value={state} />
            </div>
        </div>
        <div className="address-form d-flex justify-content-evenly flex-wrap w-100 margin-top-1 ">
            <button className="btn btn-primary margin-none w-100"
                onClick={() => {
                    if (name === "" || Address === "" || pincode === "" || state === "") {
                        seterror("Fields cannot be Empty");
                    }
                    else if (pincode.length !== 6) {
                        seterror("Pincode should be 6 digits");
                    }
                    else {
                        seterror('');
                        addAddress({name,pincode,Address,city,state})
                        setDisp("none")
                    }
                }}
            >Submit</button>
        </div>
    </div>;
}
