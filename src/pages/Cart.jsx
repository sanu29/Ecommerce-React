import { Header } from "../component/Header"
import { Footer } from "../component/Footer"
import { useCartContext } from "../context/cart-context"
import { CartBody } from "../component/CartBody"
import "./cart.css"
export const Cart = () => 
{

    const {cart} = useCartContext()

    return (
        <>
       <Header/>
        <CartBody/>
       <Footer/>
        </>
    )
}