import { Link } from "react-router-dom"
import { useState } from "react";
import { SignupHandler } from "./AuthHandler";
import { useContext } from "react";
import { useAuthContext } from "../context/auth-context";


export const SignupBody = ()=>{

    const [firstName, setFirstName] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {isLogin,user,SignupHandler,error, setError} = useAuthContext();

    return (

        <form>
    <div className="container ">
        <div className="container-light d-flex-column align-items-center  border-radius-md">
            <div className="terms heading2 text-color-light-black text-primary font-weight-bolder">Signup</div>
            <div className="d-flex-column w-75 margin-16 ">
            <div>
                {error!=="noerror"?
                <div className="alert alert-callout-danger" id="alert-dismiss">
                <div className="alert-text font-color-danger">{error}</div></div>
                :<h2></h2>}
            </div>
            <label htmlFor="Name" className="para4  m-8 label">FirstName</label>

                <input type="text"   id="firstName" className="input border-color-gray margin-none"
                    placeholder="Enter Your First Name" onChange={(e)=>setFirstName(e.target.value)} required/>

                     <label htmlFor="lastname" className="para4  m-8 label">LastName</label>

                <input type="text" id="lastName" className="input border-color-gray margin-none"
                    placeholder="Enter Your Last Name" onChange={(e)=>setLastname(e.target.value)} required/>

                <label htmlFor="username" className="para4  m-8 label">Email Address</label>

                <input type="email" id="email" className="input border-color-gray margin-none"
                    placeholder="Enter Your Email Id" onChange={(e)=>setEmail(e.target.value)} required/>

                <label htmlFor="password" className="para4  m-8 label">Password</label>

                <input type="password" id="password" autoComplete="false" className="input border-color-gray margin-none"
                    placeholder="Enter Your Password"onChange={(e)=>setPassword(e.target.value)} minLength={8}  required/>

                <div className="d-flex align-items-center terms">
                    {/* <div><input type="checkbox" name="number" className="input input-checkbox" value="one" id="one"/></div> */}
                    {/* <div><label className="label" htmlFor="one" >I accept all Terms and Conditions</label></div> */}
                </div>
                <button type="submit" onClick={(e)=>{
                        e.preventDefault()
                SignupHandler(firstName,lastname,email,password)}
                }
                     className="btn btn-primary w-100 margin-none primary-color-bg text-align-center" value={"Submit"}>Submit</button>
                <Link to={"/login"} className="justify-self-center align-self-center terms">Already have an
                    Account</Link>
            </div>
        </div>
    </div></form>

    )
}
