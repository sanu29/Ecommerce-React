import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuthContext } from "../context/auth-context";

export const LoginBody= ()=>{

    const[email, setEmail] = useState();
    const [ password, setPassword] = useState();
    const {LoginHandler,error,setError} = useAuthContext();
    return(
        <div>
     <form action="">
    <div className="container">
       <div className="container-light d-flex-column align-items-center  border-radius-md">
            <div className="terms heading2 text-color-light-black text-primary font-weight-bolder">Login</div>
                <div className="d-flex-column w-75 margin-16 ">
                  
                    
                    {error!=="noerror"?
                      <div className="alert alert-callout-danger" id="alert-dismiss">
                     <div className="alert-text font-color-danger">{error}</div></div>
                     :<h2></h2>}


                    <label htmlFor="username" className="para4  m-8 label" >Email Address</label>
                    <input type="email" id="name" className="input border-color-gray margin-none" placeholder="Enter Your Email Id" 
                    onChange={(e)=>{
                        setError("noerror")
                        setEmail(e.target.value)}} value={email}
                    required/> 
                    <label htmlFor="password" className="para4  m-8 label">Password</label>
                    <input type="password" id="password" className="input border-color-gray margin-none" placeholder="Enter Your Password" 
                     onChange={(e)=>{
                        setError("noerror")
                         setPassword(e.target.value)}} value={password}
                    required/> 
                    
                 <div className="d-flex align-items-center terms justify-content-between">
                    <div>
                        <input type="checkbox" name="number" className="input input-checkbox" value="one" id="one"/>
                        <label className="label" htmlFor="one">Remember Me</label></div>
                    <a href="" className="para4 font-color-info" onClick={()=>{
                            setEmail("test@gmail.com")
                            setPassword("tested")
                    }}>Use Test Credentials</a>
                </div>   
               
                 <button type="submit" onClick={(e)=>{
                     e.preventDefault();

                     LoginHandler(email,password)
                  
                 }} className="btn btn-primary w-100 margin-none primary-color-bg" >Submit</button>
                <Link to={"/signup"} className="justify-self-center align-self-center terms">Create a New Account</Link>
                </div>
       </div>
    </div></form>
     </div>
    )
}