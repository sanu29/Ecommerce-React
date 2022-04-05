import axios from "axios";
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const AuthContext = createContext();
const useAuthContext =()=> useContext(AuthContext)

function AuthContextProvider({children})
{
    const navigate = useNavigate();
    const [isLogin, setisLogin] = useState(false);
    const setLoginStatus= ((status)=>
    {
        setisLogin(status)
    })
    const [user, setUser] = useState();
    const setUserDetails= ((user)=>
    {
        setUser(user)
    })

    const [error, setError] = useState('noerror');
    const seterrorDetails= ((error)=>
    {
        setError(error)
    })
    
 const  SignupHandler = async (firstName,lastName,email,password) =>{

         
            try{
                const newUser = {firstName,lastName,email,password};
                const response = await axios.post(`/api/auth/signup`,newUser);
                              
                setLoginStatus(true)
                setUserDetails(response.data.createdUser)
                localStorage.setItem("token", response.data.encodedToken); 
                localStorage.setItem("user", JSON.stringify(user))
                navigate("/login")
               
            }
            catch(err)
            {   
                seterrorDetails(err.response.data.errors[0])
            }
        }
const  LoginHandler = async (email,password) =>{


            const authUser = {email,password};          
                try{
                    const response = await axios.post(`/api/auth/login`,authUser);
                    if(response.status !== 201)
                    {
                  
                    setLoginStatus(true)
                    setUserDetails(response.data.foundUser)
                    localStorage.setItem("token", response.data.encodedToken); 
                    localStorage.setItem("user", JSON.stringify(user)); 
                    navigate("/")
                    }
                    else{
                        seterrorDetails("password is Incorrect")
                      
                    }}
            catch(err)
            {   
               
                seterrorDetails(err.response.data.errors)
            }
        }

    return (
            <AuthContext.Provider value={{SignupHandler,LoginHandler, isLogin, setisLogin, user, error, setError}}>
                             {children}
            </AuthContext.Provider>
   

    )
}

export {AuthContext,useAuthContext,AuthContextProvider}