import axios from "axios";
import { createContext, useContext,useEffect,useState } from "react";
import { Toast } from "../component/Toast";

const OrderContext = createContext()

const UseOrderContext = ()=>useContext(OrderContext)

function OrderContextProvider({children})
{
 const [order, setorder] = useState()

 useEffect(()=>{
    (async()=>{
        try{
            const res = await axios({
                method:"get",
                url:`/api/user/order`,
                headers:{authorization:localStorage.getItem("token")}
            })

            setorder(res.data.order)
           
        } 
        catch(err)
        {
        }
    })()

},[])
const addOrder =async (order) =>{
    try{
        const response = await axios({
            method:"post",
            url :`/api/user/order`,
            headers:{authorization:localStorage.getItem("token")},
            data:{order}
        })
        console.log(response.data.order)
        setorder(response.data.order)
        Toast("Order Placed Successfully")
    }
    catch(err)
    {

    }
}

    return (
        <OrderContext.Provider value={{order,setorder, addOrder}}>
        
            {children}
        </OrderContext.Provider>
    )
}

export {OrderContext, OrderContextProvider, UseOrderContext}