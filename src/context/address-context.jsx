import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const AddrressContext = createContext()

const UseAddressContext = ()=>useContext(AddrressContext)

function AddrressContextProvider({children})
{
 const [address, setaddress] = useState()

 useEffect(()=>{
    (async()=>{
        try{
            const res = await axios({
                method:"get",
                url:`/api/user/address`,
                headers:{authorization:localStorage.getItem("token")}
            })

            setaddress(res.data.address)

        } 
        catch(err)
        {
        }
    })()

},[])
const addAddress =async (address) =>{
    try{
        const response = await axios({
            method:"post",
            url :`/api/user/address`,
            headers:{authorization:localStorage.getItem("token")},
            data:{address}
        })
        setaddress(response.data.address)

    }
    catch(err)
    {

    }
}

const removeAddress = async(id) =>{

    try{
        const response = await axios({
            method:'delete',
            url :`/api/user/address/${id}`,
            headers:{authorization:localStorage.getItem("token")}
        })
        setaddress(response.data.address)
    }
    catch(err)
    {

    }
}
    return (
        <AddrressContext.Provider value={{addAddress,address,removeAddress}}>
            {children}
        </AddrressContext.Provider>
    )
}

export {AddrressContext, AddrressContextProvider, UseAddressContext}